import {
  formatDate,
  getRandomPlaceholderImage,
  sliceWithSuffix,
} from "../assets/js/common.js";

const reposUrl = "https://pandora.susie.mx/github/repos";

export const repoImage = (repoName) =>
  `https://raw.githubusercontent.com/SusieHatter/${repoName}/main/screenshot.png`;

const repoHtml = (repo) =>
  `<div class="col mb-4">
    <div class="card h-100">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="${repoImage(
            repo.name
          )}" onerror="this.src='${getRandomPlaceholderImage()}'" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">
              <a href="${repo.html_url}">${repo.name}</a>
            </h5>
            <p class="card-text">${sliceWithSuffix(
              repo.description || "",
              50,
              "..."
            )}</p>
            <small class="text-muted">${formatDate(
              new Date(repo.created_at)
            )}</small>
          </div>
        </div>
      </div>
    </div>
  </div>`;

const reposHtml = (repos) =>
  `<div class="repos row row-cols-1 row-cols-xl-2"">
    ${repos
      .filter((r) => !r.fork)
      .map(repoHtml)
      .join("\n")}
  </div>`;

export const fetchRepos = async () =>
  await fetch(reposUrl).then((res) => res.json());

(async () => {
  const repos = await fetchRepos();
  const html = reposHtml(repos);
  const projectsEl = document.getElementById("projects");
  projectsEl.innerHTML = html;
})();
