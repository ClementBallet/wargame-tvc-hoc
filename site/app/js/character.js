class character {
  constructor() {

  }

  moveCharacter() {

    let playzone = document.querySelector('#playzone')
    let characterBody = document.createElement(div)

    playzone.appendChild(characterBody)

    if (moveLeft == true || moveUp == true || moveRight == true || moveDown == true) {
      playzone.getElementByTagName("div").classList.add(this.character + "Move")
    }

//player1
    if (moveUp == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotate180)
    }

    if (moveLeft == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotate90)
    }

    if (moveRight == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotateLess90)
    }
  }
}
