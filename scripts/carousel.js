const photos = [
  'assets/gallery/IMG20250403144559.jpg',
  'assets/gallery/IMG20250221105317.jpg',
  'assets/gallery/IMG20251001101356.jpg',
  'assets/gallery/IMG20251201150902.jpg',
  'assets/gallery/IMG20260105113654.jpg',
  'assets/gallery/IMG20260119094432.jpg',
  'assets/gallery/IMG20251209151053.jpg',
  'assets/gallery/IMG20260207163533.jpg',
  'assets/gallery/IMG20260217133722.jpg',
  'assets/gallery/IMG_20230323_115754.jpg',
  'assets/gallery/IMG_20231207_150431.jpg',
  'assets/gallery/IMG_20260127_173108.jpg',
];

const imageEl = document.getElementById('carousel-image');
const prevEl = document.getElementById('carousel-prev');
const nextEl = document.getElementById('carousel-next');
const statusEl = document.getElementById('carousel-status');

if (imageEl && prevEl && nextEl && statusEl && photos.length > 0) {
  let index = 0;

  const render = () => {
    imageEl.src = photos[index];
    imageEl.alt = `Santa Cruz Fruit gallery photo ${index + 1}`;
    statusEl.textContent = `${index + 1} / ${photos.length}`;
  };

  const goNext = () => {
    index = (index + 1) % photos.length;
    render();
  };

  const goPrev = () => {
    index = (index - 1 + photos.length) % photos.length;
    render();
  };

  let timer = window.setInterval(goNext, 4500);

  const resetTimer = () => {
    window.clearInterval(timer);
    timer = window.setInterval(goNext, 4500);
  };

  nextEl.addEventListener('click', () => {
    goNext();
    resetTimer();
  });

  prevEl.addEventListener('click', () => {
    goPrev();
    resetTimer();
  });

  render();
}
