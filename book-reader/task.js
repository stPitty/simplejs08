const book = document.querySelector('.book');

function bookReplace(regStr, value) {
  const reg = new RegExp(`(${regStr})(\\w*)`)

  if (reg.test(book.className)) {
    book.className = book.className.replace(reg, value);
  } else {
    book.classList.add(value)
  }
}


const fontButtons = Array.from(document.querySelectorAll('.font-size'));
fontButtons.forEach(font => {
  font.onclick = () => false;
  font.addEventListener('click', () => {
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    font.classList.add('font-size_active')
    const size = font.dataset.size;
    const reg = 'book_fs-'
    if (size) {
      bookReplace(reg, reg+size);
    } else {
      bookReplace(reg, '');
    }
  })
})


const colorButton = document.querySelector('.book__control_color');
const colorButtons = Array.from(colorButton.querySelectorAll('a'));
colorButtons.forEach(color => {
  color.onclick = () => false;
  color.addEventListener('click', () => {
    colorButton.querySelector('.color_active') .classList.remove('color_active');
    color.classList.add('color_active');
    const textColor = color.dataset.textColor;
    const reg = 'book_color-';
    bookReplace(reg, reg+textColor);
  })
})


const bgButton = document.querySelector('.book__control_background');
const bgButtons = Array.from(bgButton.querySelectorAll('a'));
bgButtons.forEach(bg => {
  bg.onclick = () => false;
  bg.addEventListener('click', () => {
    bgButton.querySelector('.color_active') .classList.remove('color_active');
    bg.classList.add('color_active');
    const bgColor = bg.dataset.bgColor;
    const reg = 'book_bg-';
    bookReplace(reg, reg+bgColor);
  })
})
