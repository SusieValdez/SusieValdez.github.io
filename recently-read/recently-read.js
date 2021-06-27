const bardItem = (obj) =>
  `<div class='bard-item'>
    <a href="${obj.link}">${obj.title}</a>
  </div>`;
const recentlyReadItemsEl = document.getElementById("bard-items");
fetch("https://raw.githubusercontent.com/SusieHatter/bard/main/items.json")
  .then((res) => res.json())
  .then((items) => `${items.map(bardItem).join("\n")}`)
  .then((html) => (recentlyReadItemsEl.innerHTML = html));
