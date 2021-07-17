import {
  BARD_BASE_URL,
  formatDate,
  getRandomPlaceholderImage,
  sliceWithSuffix,
} from "../assets/js/common.js";

const TITLE_CUTOFF = 50;

const bardItem = (obj) => {
  const title = sliceWithSuffix(obj.title || "", TITLE_CUTOFF, "...");
  const image = obj.image || getRandomPlaceholderImage();

  const timestampDate = new Date(obj.timestamp);
  const addedAt = formatDate(timestampDate);

  return `
    <div class="col">
      <div class="card h-100 " >
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${title}</h5>
          <p class="card-text"><small class="text-muted">Added: ${addedAt}</small></p>
          <p class="card-text">
            ${obj.description}
          </p>
          <a href="${obj.link}" class="btn mt-auto">Read it here</a>
        </div>
      </div>
    </div>`;
};

const fetchRecentlyReadItems = async () =>
  fetch(`${BARD_BASE_URL}/data/recently-read.json`).then((res) => res.json());

const items = await fetchRecentlyReadItems();
const html = items.map(bardItem).join("\n");
document.getElementById("bard-items").innerHTML = html;
