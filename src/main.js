import fs from "fs-extra";
import path from "path";

const INDENT_SZIE = 2;
const NUM_INDENTS = 4; // Depenendent on the number of indents in the wrapping div in TEMPLATE_HTML
const TEMPLATE_HTML = "site-template.html";
const SOURCE_SITE_DIR = "src/site";
const DESTINATION_SITE_DIR = "docs";
const SOURCE_SITE_DEPTH = SOURCE_SITE_DIR.split("/").length;

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) {
      yield* await walk(entry);
    }
    if (d.isFile()) {
      yield entry;
    }
  }
}

const indent = (lines, indentSize = 2, n = 1) =>
  lines
    .split("\n")
    .map((line) => " ".repeat(indentSize * n) + line)
    .join(`\n`);

async function buildSite() {
  fs.rmSync(DESTINATION_SITE_DIR, { recursive: true, force: true });
  const templateHtml = fs.readFileSync("src/" + TEMPLATE_HTML).toString();
  for await (const filePath of walk(SOURCE_SITE_DIR)) {
    const contents = fs.readFileSync(filePath).toString();
    const newFilePath = path.join(
      DESTINATION_SITE_DIR,
      filePath.split(path.sep).slice(SOURCE_SITE_DEPTH).join(path.sep)
    );

    let newPageContents;
    switch (path.extname(filePath)) {
      case ".html": {
        newPageContents =
          `<!-- THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN ${filePath} -->\n` +
          templateHtml.replace(
            "{{content}}",
            `\n${indent(contents, INDENT_SZIE, NUM_INDENTS).slice(
              0,
              -INDENT_SZIE
            )}`
          );
        break;
      }
      case ".css": {
        newPageContents =
          `/* THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN ${filePath} */\n` +
          contents;
        break;
      }
      case ".js": {
        newPageContents =
          `// THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN ${filePath}\n` +
          contents;
        break;
      }
      default: {
        newPageContents = contents;
        break;
      }
    }

    console.log(`Writing: ${newFilePath}`);
    fs.outputFileSync(newFilePath, newPageContents);
  }
}

buildSite();
