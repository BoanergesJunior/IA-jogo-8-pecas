const randomButton = document.querySelector("#randomButton");
const pieces = []

randomButton.addEventListener("click", randomize);

// fill the pieces array with the pieces
function init() {
  for (let i = 0; i < 9; i++) {
    const piece = document.querySelector("#p" + i)
    pieces.push(piece)
  }

  pieces.sort(() => Math.random() - 0.5)
  render()
}

function render() {
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i]
    if (piece) {
      piece.style.left = (i % 3 * 100 + 5) + "px"
      if (i < 3) piece.style.top = "5px"
      else if (i < 6) piece.style.top = "105px"
      else piece.style.top = "205px"
    }
  }
}

function randomize() {
  do {
    pieces.sort(() => Math.random() - 0.5)
  } while (!checkValidGame(pieces))

  render()
}

function checkValidGame(array) {
  let inversions = 0
  const size = array.length

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (array[i] && array[j] && array[i].dataset.value < array[j].dataset.value)
        inversions++
    }
  }

  return inversions % 2 === 0
}

init()