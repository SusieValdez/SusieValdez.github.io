import { BARD_BASE_URL } from "../assets/js/common.js";

const POST_PREVIEW_LENGTH = 400;

const postsList = (posts) =>
  `<div class="posts">
    ${posts.map(blogPost).join("\n")}
  </div>`;

const singleBlogPost = (post) => {
  return marked(post.text);
};

const blogPost = (post) => {
  return `
    <div class="card h-100 mb-4">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">
          ${DOMPurify.sanitize(
            marked(post.body).slice(0, POST_PREVIEW_LENGTH) + "..."
          )}
        </p>
        <a href="?p=${post.slug}" class="btn rainbow-5">Read it here</a>
      </div>
    </div>
    `;
};

const fetchPosts = async () =>
  await fetch(`${BARD_BASE_URL}/data/blog-posts.json`).then((res) =>
    res.json()
  );

const fetchPageTexts = async (slugs) =>
  await Promise.all(
    slugs.map((slug) =>
      fetch(`${BARD_BASE_URL}/posts/${slug}.md`).then((res) => res.text())
    )
  );

const splitTitleAndBody = (text) => {
  const lines = text.split("\n");
  const title = lines[0].replace("# ", "");
  const body = lines.slice(1).join("\n").trim();
  return {
    title,
    body,
  };
};

const parsePostTexts = (postTexts, slugs) => {
  const posts = {};
  for (let i = 0; i < postTexts.length; i++) {
    const postText = postTexts[i];
    const slug = slugs[i];
    const { title, body } = splitTitleAndBody(postText);
    posts[slug] = {
      title,
      body,
      slug,
      text: postText,
    };
  }
  return posts;
};

const buildPage = (posts) => {
  const postSlug = new URL(document.location).searchParams.get("p");
  if (postSlug === null) {
    return { html: postsList(Object.values(posts)), title: "SusieHatter" };
  } else {
    const post = posts[postSlug];
    if (post === undefined) {
      return;
    }
    return {
      html: singleBlogPost(post),
      title: `${post.title} | SusieHatter`,
    };
  }
};

const slugs = await fetchPosts();
const postTexts = await fetchPageTexts(slugs);
const posts = parsePostTexts(postTexts, slugs);
const page = buildPage(posts);
if (page === undefined) {
  document.location = "/";
} else {
  document.getElementById("blog").innerHTML = page.html;
  document.title = page.title;
}
