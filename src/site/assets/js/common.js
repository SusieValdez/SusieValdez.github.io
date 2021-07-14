export const BARD_BASE_URL =
  "https://raw.githubusercontent.com/SusieHatter/bard/main";

export const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const PLACEHOLDER_IMAGES = [
  "https://sm.ign.com/t/ign_latam/screenshot/default/sailor-moon-teorias-locas_krsb.1280.jpg",
  "https://fondosmil.com/fondo/949.jpg",
  "https://fondosmil.com/fondo/938.png",
  "https://wallpaperaccess.com/full/2165199.jpg",
];

export const getRandomPlaceholderImage = () => "https://picsum.photos/800/450";
// PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)];

export const sliceWithSuffix = (str, length, suffix) =>
  str.length > length ? str.slice(0, length) + suffix : str;
