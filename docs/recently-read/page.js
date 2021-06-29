// THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN src\site\recently-read\page.js
const TITLE_CUTOFF = 50;

const bardItem = (obj) => {
  const title =
    obj.title.length > TITLE_CUTOFF
      ? obj.title.slice(0, TITLE_CUTOFF) + "..."
      : obj.title;
  return `<div class="col">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${obj.description}
        </p>
        <a href="${obj.link}" class="btn rainbow-5 mt-auto">Read it here</a>
      </div>
    </div>
  </div>`;
};

const recentlyReadItemsEl = document.getElementById("bard-items");
fetch("https://raw.githubusercontent.com/SusieHatter/bard/main/items.json")
  .then((res) => res.json())
  .then((items) => `${items.map(bardItem).join("\n")}`)
  .then((html) => (recentlyReadItemsEl.innerHTML = html));
