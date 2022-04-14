function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function loop() {
  const oldRotator = document.querySelector('.rotator__case_active');
  const newRotator = oldRotator.nextElementSibling || oldRotator.parentElement.firstElementChild;
  newRotator.classList.add('rotator__case_active')

  const speed = newRotator.dataset.speed;

  for (let style in newRotator.dataset) {
    if (newRotator.dataset.hasOwnProperty(style)) {
      newRotator.style[style] = newRotator.dataset[style];
    }
  }

  oldRotator.classList.remove('rotator__case_active');

  await sleep(speed)
}

(async () => {
  while(true) {
    await loop();
  }
})()