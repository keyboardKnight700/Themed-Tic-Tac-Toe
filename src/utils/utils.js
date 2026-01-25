export function getImageUrl(imageName) {
  return new URL(`../../assets/${imageName}.svg`, import.meta.url);
}
