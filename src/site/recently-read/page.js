const PLACEHOLDER_IMAGES = [
  "https://netjoven.s3-us-west-1.amazonaws.com/_files/12/25/12255Oqu.jpg",
  "https://sm.ign.com/t/ign_latam/screenshot/default/sailor-moon-teorias-locas_krsb.1280.jpg",
  "https://i.pinimg.com/originals/ae/7c/02/ae7c02c34c4f85b8b7706b76814fac4e.png",
  "https://dg31sz3gwrwan.cloudfront.net/screen/286949/1_iphone.jpg",
  "https://i1.wp.com/www.bitme.gg/wp-content/uploads/2021/02/Ranma-1_2_-Todos-los-personajes-que-tienen-una-maldicion-en-la-serie-1.jpg?resize=1280%2C720&ssl=1",
  "",
];

const TITLE_CUTOFF = 50;

const processDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const bardItem = (obj) => {
  const title =
    obj.title.length > TITLE_CUTOFF
      ? obj.title.slice(0, TITLE_CUTOFF) + "..."
      : obj.title;
  const image =
    obj.image ||
    PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)];

  const timestampDate = new Date(obj.timestamp);
  const addedAt = processDate(timestampDate);

  return `<div class="col">
            <div class="card h-100 " >
              <img class="card-img-top" src="${image}" alt="Card image cap">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${title}</h5>
                <p class="card-text"><small class="text-muted">Added: ${addedAt}</small></p>
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
