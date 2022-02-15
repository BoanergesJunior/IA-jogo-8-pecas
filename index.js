const randomButton = document.querySelector("#randomButton");
const pieces = []

randomButton.addEventListener("click", randomize);

// fill the pieces array with the pieces
function init() {
  for (let i = 0; i < 9; i++) {
    const piece = document.querySelector("#p" + i)

    if (piece != null) {
      piece.addEventListener("click", movePiece, false)
    }

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

function movePiece() {
  let index = pieces.indexOf(this)
  // left and medium columns
  if (index % 3 !== 0) {
    if (!pieces[index - 1]) {
      pieces[index - 1] = this
      pieces[index] = null
    }
  }
  // right and medium columns
  if (index % 3 !== 2) {
    if (!pieces[index + 1]) {
      pieces[index + 1] = this
      pieces[index] = null
    }
  }
  // top and medium row
  if (index > 2) {
    if (!pieces[index - 3]) {
      pieces[index - 3] = this
      pieces[index] = null
    }
  }
  // bottom and medium row
  if (index < 6) {
    if (!pieces[index + 3]) {
      pieces[index + 3] = this
      pieces[index] = null
    }
  }
  render()
}

init()