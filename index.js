(() => {
  const pieces = []

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

  init()
})()