const colorPalette = document.querySelectorAll('.color');

function createBnt(nameOfBnt, id) {
  const createButton = document.createElement('button');
  const buttonLocation = document.getElementById('buttons');
  buttonLocation.appendChild(createButton);
  createButton.id = id;
  createButton.innerHTML = nameOfBnt;
}
createBnt('Cores aleatórias', 'button-random-color');

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let savedColorsObj = { color1: 'red', color2: 'green', color3: 'blue' };

function randomColor() {
  const buttonRandomColor = document.getElementById('button-random-color');

  function randomizeColors() {
    for (let index = 0; index < colorPalette.length; index += 1) {
      colorPalette[0].style.backgroundColor = 'black';
      colorPalette[index].style.backgroundColor = generateRandomColor();

      savedColorsObj = { color1: colorPalette[1].style.backgroundColor, color2: colorPalette[2].style.backgroundColor, color3: colorPalette[3].style.backgroundColor };
      localStorage.setItem('colorPalette', JSON.stringify(savedColorsObj));
    }
  }
  buttonRandomColor.addEventListener('click', randomizeColors);
}
randomColor();

function saveColors() {
  const savedColors = JSON.parse(localStorage.getItem('colorPalette'));
  colorPalette[0].style.backgroundColor = 'black';

  if (savedColors === null) {
    colorPalette[1].style.backgroundColor = savedColorsObj.color1;
    colorPalette[2].style.backgroundColor = savedColorsObj.color2;
    colorPalette[3].style.backgroundColor = savedColorsObj.color3;
  } else {
    colorPalette[1].style.backgroundColor = savedColors.color1;
    colorPalette[2].style.backgroundColor = savedColors.color2;
    colorPalette[3].style.backgroundColor = savedColors.color3;
  }
}
saveColors();

const pixelBoard = document.getElementById('pixel-board');
let input = 5;
const numberOfLines = input;
const numberOfColumns = input;

function createPixels() {
  for (let index = 0; index < numberOfColumns; index += 1) {
    const newColumn = document.createElement('div');
    newColumn.className = 'pixel';
    pixelBoard.appendChild(newColumn);
    for (let indexLine = 1; indexLine < numberOfLines; indexLine += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'pixel';
      pixelBoard.appendChild(newLine);
    }
  }
}
createPixels();

colorPalette[0].classList.add('selected');
function selectedColor(event) {
  colorPalette[0].classList.remove('selected');
  colorPalette[1].classList.remove('selected');
  colorPalette[2].classList.remove('selected');
  colorPalette[3].classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette[0].addEventListener('click', selectedColor);
colorPalette[1].addEventListener('click', selectedColor);
colorPalette[2].addEventListener('click', selectedColor);
colorPalette[3].addEventListener('click', selectedColor);

function colorPixels(event) {
  const selected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selected;
  pixelBoard.style.backgroundColor = '';

  //function saveDraw() {
  //  const pixels = document.querySelectorAll('.pixel');
  //  for (let index = 0; index <= pixels.length; index += 1) {
  //    const pixelsIndex = pixels[index].style.backgroundColor;
  //    console.log(pixelsIndex.pixelBoard);
  //    localStorage.setItem('pixelBoard', JSON.stringify(pixelsIndex.pixelBoard));
  //  }
  //}
  //saveDraw();
}
pixelBoard.addEventListener('click', colorPixels);

createBnt('Limpar', 'clear-board');
const clearButton = document.getElementById('clear-board');
function clearBnt() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBnt);

//function restoreDraw() {
//  const pixels = document.querySelectorAll('.pixel');
//  const savedDraw = JSON.parse(localStorage.getItem('pixelBoard'));
//  for (let index = 0; index < savedDraw.length; index += 1) {
//    pixels[index].style.backgroundColor = savedDraw[index].style.backgroundColor;
//  }
//}
//restoreDraw();

// REFERENCIAS//
// GERAR COR ALEATORIA -> https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript//
