// THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN src\site\page.js
import { fetchRepos, repoImage } from "./projects/page.js";

import {
  sliceWithSuffix,
  getRandomPlaceholderImage,
} from "../assets/js/common.js";

const repoHtml = (repo) =>
  `<div class="col">
    <div class="card h-100 p-3 border-bottom">
      <div class="row">
        <div class="col-3 align-self-center">
          <div class="ratio ratio-1x1">
            <img
              class="object-fit-cover"
              src="${repoImage(repo.name)}"
              onerror="this.src='${getRandomPlaceholderImage()}'"
              alt="${repo.description}"
            >
          </div>
        </div>
        <div class="col-9">
          <a href="${repo.html_url}" class=" text-decoration-none">
            <h5 class="p-1 project-link mb-2">${repo.name}</h5>
          </a>
          <p class="mb-0">
            ${sliceWithSuffix(repo.description || "", 50, "...")}
          </p>
        </div>
      </div>
    </div>
  </div>`;

const reposHtml = (repos) =>
  repos
    .filter((r) => !r.fork)
    .slice(0, 6)
    .map(repoHtml)
    .join("\n");

(async () => {
  const repos = await fetchRepos();
  const html = reposHtml(repos);
  const projectsEl = document.getElementById("projects");
  projectsEl.innerHTML = html;
})();
