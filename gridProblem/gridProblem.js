let int = (Math.random() < 0.5 ? 1 : 0)
let tile;
let container;
let tileStatus;

function createGrid(num) {
  if (num > 0) {
    let generatedGrid = [];
    let gridLength = num * num;

    for (let i = 0; i < gridLength; i++) {
      generatedGrid.push(Math.random() < 0.5 ? 1 : 0);
    }

    generatedGrid = new Array(gridLength / num).fill().map(_ => generatedGrid.splice(0, num))

    generatedGrid.map((subArray) => {
      container = document.createElement('div');
      container.setAttribute('id', 'container');
      document.querySelector('#grid-box').appendChild(container);

      subArray.map((el) => {
        if (el === 0) {
          tileStatus = 'emptyTile'
        } else {
          tileStatus = 'filledTile'
        }
        tile = document.createElement('button');
        tile.setAttribute('class', tileStatus);
        if (tile.className === 'filledTile') {
          tile.style.backgroundColor = 'red';
          tile.style.height = '75px';
          tile.style.width = '75px';
          tile.onclick = tileHandler;
          tile.onmouseover = tileHover;
          tile.onmouseout = tileHoverAway;
        }

        if (tile.className === 'emptyTile') {
          tile.style.backgroundColor = 'white';
          tile.style.height = '75px';
          tile.style.width = '75px';
        }
        document.querySelector('#grid-box').appendChild(tile);
      })
    });
  }
}

function gridValueHandler() {
  const child = document.getElementById("grid-box");
  child.innerText = '';
  const inputValue = document.getElementById("slide-value").value;
  container = document.createElement('div');
  container.setAttribute('id', 'inputResultLabel');
  document.querySelector('#grid-box').appendChild(container);
  document.getElementById('inputResultLabel').textContent = `You have selected a ${inputValue}x${inputValue} grid!`;
  document.getElementById('color-selection').style.display = "block";
  createGrid(inputValue);
}

function colourHandler() {
  const activeTile = document.getElementById('active-color-input').value;
  const redundantTile = document.getElementById('redundant-color-input').value;
  const activeTileColor = document.getElementsByClassName("filledTile");
  const redundantTileColor = document.getElementsByClassName("emptyTile");

  for (let i = 0; i < activeTileColor.length; i++) {
    activeTileColor[i].style.backgroundColor = activeTile;
  }

  for (let i = 0; i < redundantTileColor.length; i++) {
    redundantTileColor[i].style.backgroundColor = redundantTile;
  }

  document.getElementById('hover-selection').style.display = "block";
}

function tileHandler() {
  const grid = document.getElementById('grid-box');
  console.log(event.target.previousElementSibling.className)
  console.log(event.target.nextElementSibling.className)
  console.log(event)

  const filledTiles = document.getElementsByClassName('filledTile');
}

function tileHover() {
  const activeTileColor = document.getElementsByClassName("filledTile");
  const hoverColor = document.getElementById('hover-color-input').value;

  for (let i = 0; i < activeTileColor.length; i++) {
    activeTileColor[i].style.backgroundColor = hoverColor;
  }
}

function tileHoverAway() {
  const activeTile = document.getElementById('active-color-input').value;
  const activeTileColor = document.getElementsByClassName("filledTile");

  for (let i = 0; i < activeTileColor.length; i++) {
    activeTileColor[i].style.backgroundColor = activeTile;
  }
}
