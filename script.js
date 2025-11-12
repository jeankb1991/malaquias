const slides = document.getElementById('slides');
const total = slides.children.length;
let index = 0;

function next() {
  index = (index + 1) % total;
  updateSlide();
}

function prev() {
  index = (index - 1 + total) % total;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

document.getElementById('next').onclick = next;
document.getElementById('prev').onclick = prev;

setInterval(next, 5000);
