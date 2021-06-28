import fs from "fs";
import path from "path";

const INDENT_SZIE = 2;
const NUM_INDENTS = 4; // Depenendent on the number of indents in the wrapping div in TEMPLATE_HTML
const TEMPLATE_HTML = "site-template.html";

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
  const templateHtml = fs.readFileSync("src/" + TEMPLATE_HTML).toString();
  for await (const filename of walk("src/html")) {
    const pageHtml = fs.readFileSync(filename).toString();
    const newFilePath = filename.split(path.sep).slice(2).join(path.sep);
    const wrappedPageHtml =
      `<!-- THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN ${filename} -->\n` +
      templateHtml.replace(
        "{{content}}",
        `\n${indent(pageHtml, INDENT_SZIE, NUM_INDENTS).slice(0, -INDENT_SZIE)}`
      );
    fs.writeFileSync(newFilePath, wrappedPageHtml);
  }
}

buildSite();
