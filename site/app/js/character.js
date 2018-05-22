class character {
  constructor(className, startPositionX, startPositionY, startRotateClassName) {
      this.className = className;
      this.startPositionX = startPositionX;
      this.startPositionY = startPositionY;
      this.startRotateClassName = startRotateClassName;
      this.characterBody = null;

      this.moveUp = false;
      this.moveLeft = false;
      this.moveDown = false;
      this.moveRight = false;

      this.createCharacter();
  }

  createCharacter(){
    let playzone = document.querySelector('#playZone')
    this.characterBody = document.createElement('div')

    playzone.appendChild(this.characterBody)
    this.characterBody.classList.add(this.className, this.startRotateClassName, 'player_avatar', 'characterSheet')

    this.characterBody.style.left = this.startPositionX + 'px';
    this.characterBody.style.top = this.startPositionY + 'px';
  }

  moveCharacter() {

///////////////////////////////// VARIABLES /////////////////////////////////

    //this.character = document.getElementByClassName(this.id)
    const step = 5;

///////////////////////////////// ANIMATION /////////////////////////////////



    if (this.moveLeft == true || this.moveUp == true || this.moveRight == true || this.moveDown == true) {
      this.characterBody.classList.remove(this.character + "Idle")
      this.characterBody.classList.add(this.character + "Move")
    }

    if (this.moveLeft == false || this.moveUp == false || this.moveRight == false || this.moveDown == false) {
      this.characterBody.classList.remove(this.character + "Move")
      this.characterBody.classList.add(this.character + "Idle")
    }

//////////////////////////// MOVEMENT & ROTATION ////////////////////////////

    if (this.moveUp == true) {
      this.characterBody.classList.add("rotateLess90");
      this.characterBody.style.top = this.startPositionY - step + "px";
    }

    if (this.moveUp == true && this.moveLeft == true) {
      this.characterBody.classList.add("rotateLess135");
      this.characterBody.style.top = this.startPositionY - step + "px";
      this.characterBody.style.left = this.startPositionX - step + "px";
    }

    if (this.moveUp == true && this.moveRight == true) {
      this.characterBody.classList.add("rotateLess45");
      this.characterBody.style.top = this.startPositionY - step + "px";
      this.characterBody.style.left = this.startPositionX + step + "px";
    }

    if (this.moveLeft == true) {
      this.characterBody.classList.add("rotate180");
      this.characterBody.style.left = this.startPositionX - step + "px";
    }

    if (this.moveRight == true) {
      this.characterBody.classList.add("rotate90", "rotate180", "rotateLess90", "rotate45", "rotate135", "rotateLess45", "rotateLess135");
      this.characterBody.style.left = this.startPositionX + step + "px";
    }

    if (this.moveDown == true) {
      this.characterBody.classList.remove("rotate90");
      this.characterBody.style.top = this.startPositionY + step + "px";
    }

    if (this.moveDown == true && this.moveLeft == true) {
      this.characterBody.classList.add("rotate135");
      this.characterBody.style.top = this.startPositionY + step + "px";
      this.characterBody.style.left = this.startPositionX - step + "px";
    }

    if (this.moveDown == true && this.moveRight == true) {
      this.characterBody.classList.add("rotate45");
      this.characterBody.style.top = this.startPositionY + step + "px";
      this.characterBody.style.left = this.startPositionX + step + "px";
    }
  }
}
