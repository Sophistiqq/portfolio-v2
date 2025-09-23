const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.innerHTML = nav.classList.contains("open") ? "close" : "menu";
});
const works = document.querySelector('.works');


const thumb = document.querySelector('.scrollbar-thumb');
const track = document.querySelector('.scrollbar-track');
let startX = 0;
let scrollStart = 0;

function updateThumb() {
  const ratio = works.scrollLeft / (works.scrollWidth - works.clientWidth);
  const maxThumbLeft = track.offsetWidth - thumb.offsetWidth;
  thumb.style.left = ratio * maxThumbLeft + 'px';
}

works.addEventListener('scroll', updateThumb);
window.addEventListener('resize', updateThumb);
updateThumb();

// Dragging
let isDragging = false;
thumb.addEventListener('mousedown', () => {
  isDragging = true;
  document.body.style.userSelect = 'none';
});
document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.userSelect = '';
});
works.addEventListener('touchstart', e => {
  startX = e.touches[0].pageX;
  scrollStart = works.scrollLeft;
}, { passive: true });

works.addEventListener('touchmove', e => {
  const dx = e.touches[0].pageX - startX;
  works.scrollLeft = scrollStart - dx;
}, { passive: true });
document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const trackRect = track.getBoundingClientRect();
  let newLeft = e.clientX - trackRect.left - thumb.offsetWidth / 2;
  const maxLeft = track.offsetWidth - thumb.offsetWidth;
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  thumb.style.left = newLeft + 'px';

  const ratio = newLeft / maxLeft;
  works.scrollLeft = ratio * (works.scrollWidth - works.clientWidth);
});

// --- mobile drag ---
thumb.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].clientX;
  scrollStart = works.scrollLeft;
}, { passive: true });

document.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - startX;
  const scrollRatio = works.scrollWidth / works.clientWidth;
  works.scrollLeft = scrollStart + dx * scrollRatio;
}, { passive: true });

document.addEventListener('touchend', () => {
  isDragging = false;
});


document.querySelectorAll('.works article').forEach(article => {
  const circle = document.createElement('div');
  circle.classList.add('hover-circle');
  circle.textContent = 'Open';
  article.appendChild(circle);

  const circleSize = 100; // must match CSS width/height
  const shrinkDistance = 150; // how far from edge scaling happens

  article.addEventListener('mousemove', e => {
    const rect = article.getBoundingClientRect();
    const x = e.clientX - rect.left - circleSize / 2;
    const y = e.clientY - rect.top - circleSize / 2;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // distance from edges
    const distLeft = e.clientX - rect.left;
    const distRight = rect.right - e.clientX;
    const distTop = e.clientY - rect.top;
    const distBottom = rect.bottom - e.clientY;
    const minDist = Math.min(distLeft, distRight, distTop, distBottom);

    // scale factor: 0 at edge, 1 at center
    let scale = Math.max(0, Math.min(1, minDist / shrinkDistance));

    circle.style.transform = `scale(${scale})`;
    circle.style.opacity = scale;
  });

  article.addEventListener('mouseleave', () => {
    circle.style.transform = 'scale(0)';
    circle.style.opacity = '0';
  });
});
