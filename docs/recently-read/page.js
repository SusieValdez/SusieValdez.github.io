// THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN src\site\recently-read\page.js
const PLACEHOLDER_IMAGES = [
  "https://netjoven.s3-us-west-1.amazonaws.com/_files/12/25/12255Oqu.jpg",
  "https://sm.ign.com/t/ign_latam/screenshot/default/sailor-moon-teorias-locas_krsb.1280.jpg",
  "https://i.pinimg.com/originals/ae/7c/02/ae7c02c34c4f85b8b7706b76814fac4e.png",
  "https://dg31sz3gwrwan.cloudfront.net/screen/286949/1_iphone.jpg",
];

const TITLE_CUTOFF = 50;

const bardItem = (obj) => {
  const title =
    obj.title.length > TITLE_CUTOFF
      ? obj.title.slice(0, TITLE_CUTOFF) + "..."
      : obj.title;
  const image =
    obj.image ||
    PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)];
  return `<div class="col">
            <div class="card h-100">
              <img class="card-img-top" src="${image}" alt="Card image cap">
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
