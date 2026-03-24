document.addEventListener('DOMContentLoaded', () => {
const images = document.querySelectorAll('img');
images.forEach(img => {
if (img.src.includes('picsum.photos')) {
const url = new URL(img.src);
url.searchParams.set('t', new Date().getTime());
img.src = url.toString();
}
});
});