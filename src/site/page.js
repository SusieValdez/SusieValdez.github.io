import { fetchRepos, repoImage } from "./projects/page.js";

import {
  sliceWithSuffix,
  getRandomPlaceholderImage,
} from "../assets/js/common.js";

const repoHtml = (repo) =>
  `<div class="col-12 col-md-6">
    <div class="py-3 border-bottom">
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
          <a href="${repo.html_url}"><h5 class="mb-2">${repo.name}</h5></a>
          <p class="mb-0">
            ${sliceWithSuffix(repo.description || "", 50, "...")}
          </p>
        </div>
      </div>
    </div>
  </div>`;

const reposHtml = (repos) => repos.map(repoHtml).join("\n");

const repos = (await fetchRepos()).slice(0, 6);
const html = reposHtml(repos);
const projectsEl = document.getElementById("projects");
projectsEl.innerHTML = html;
