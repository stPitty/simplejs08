const reveals = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  return !((bottom < 0) || (top > window.innerHeight))
}


reveals.forEach((reveal) => {
  setInterval(() => {
    if (isVisible(reveal)) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  }, 500);
})