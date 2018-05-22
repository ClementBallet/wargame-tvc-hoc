class character {
  constructor() {

  }

  moveCharacter() {

///////////////////////////////// VARIABLES /////////////////////////////////

    let character1 = document.getElementByClassName(this.character)
    const step = 5;
    let character1PositionX =
    let character1PositionY =
    let character2PositionX =
    let character2PositionY =


///////////////////////////////// ANIMATION /////////////////////////////////

    let playzone = document.querySelector('#playzone')
    let characterBody = document.createElement(div)

    playzone.appendChild(characterBody)
    playzone.getElementByTagName('div').classList.add(this.character)

    if (moveLeft == true || moveUp == true || moveRight == true || moveDown == true) {
      playzone.getElementByClassName(this.character).classList.remove(this.character + "Idle")
      playzone.getElementByClassName(this.character).classList.add(this.character + "Move")
    }

    if (moveLeft == false || moveUp == false || moveRight == false || moveDown == false) {
      playzone.getElementByClassName(this.character).classList.remove(this.character + "Move")
      playzone.getElementByClassName(this.character).classList.add(this.character + "Idle")
    }

//////////////////////////// MOVEMENT & ROTATION ////////////////////////////

  //player1
    if (moveUp == true) {
      document.getElementByClassName(this.character).classList.add(rotate180)
    }

    if (moveLeft == true) {
      document.getElementByClassName(this.character).classList.add(rotate90)
    }

    if (moveRight == true) {
      document.getElementByClassName(this.character).classList.add(rotateLess90)
    }

    if (moveDown == true) {
      document.getElementByClassName(this.character).classList.remove("rotate90", "rotate180", "rotateLess90")
    }

  //player2
    if (moveUp == true) {
      document.getElementByClassName(this.character).classList.remove("rotate90", "rotate180", "rotateLess90")
    }

    if (moveLeft == true) {
      document.getElementByClassName(this.character).classList.add(rotateLess90)
    }

    if (moveRight == true) {
      document.getElementByClassName(this.character).classList.add(rotate90)
    }

    if (moveDown == true) {
      document.getElementByClassName(this.character).classList.add(rotate180)
    }
  }
}
