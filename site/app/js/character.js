class character {
  constructor() {

  }

  moveCharacter() {

    let step = -5;

    let playzone = document.querySelector('#playzone')
    let characterBody = document.createElement(div)

    playzone.appendChild(characterBody)

    if (moveLeft == true || moveUp == true || moveRight == true || moveDown == true) {
      playzone.getElementByTagName("div").classList.remove(this.character + "Idle")
      playzone.getElementByTagName("div").classList.add(this.character + "Move")
    }

    if (moveLeft == false || moveUp == false || moveRight == false || moveDown == false) {
      playzone.getElementByTagName("div").classList.remove(this.character + "Move")
      playzone.getElementByTagName("div").classList.add(this.character + "Idle")
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

    if (moveDown == true) {
      document.querySelector("." + this.character + "Move").classList.remove("rotate90", "rotate180", "rotateLess90")
    }

  //player2
    if (moveUp == true) {
      document.querySelector("." + this.character + "Move").classList.remove("rotate90", "rotate180", "rotateLess90")
    }

    if (moveLeft == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotateLess90)
    }

    if (moveRight == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotate90)
    }

    if (moveDown == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotate180)
    }
  }
}
