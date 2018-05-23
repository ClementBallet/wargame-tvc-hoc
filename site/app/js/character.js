class character {
  constructor (classNameIdle, classNameMove, startPositionX, startPositionY, startRotateClassName) {
      this.className = classNameIdle;
      this.classNameMove = classNameMove;
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
    let playzone = document.querySelector('#playZone');
    this.characterBody = document.createElement('div');
    console.log(playzone);
    playzone.appendChild(this.characterBody);
    this.characterBody.classList.add(this.className, this.startRotateClassName, 'player_avatar', 'characterSheet');

    this.characterBody.style.left = this.startPositionX + 'px';
    this.characterBody.style.top = this.startPositionY + 'px';
  }

  moveCharacter() {

///////////////////////////////// VARIABLES /////////////////////////////////

    //this.character = document.getElementByClassName(this.id)
    const step = 4;
    let PositionX = this.characterBody.offsetLeft;
    let PositionY = this.characterBody.offsetTop;
    let clearClassRotate = this.characterBody.classList.remove("rotate90", "rotate180", "rotateLess90", "rotate45", "rotate135", "rotateLess45", "rotateLess135");

    let characterWidth = this.characterBody.getBoundingClientRect().width;
    let playzone = document.querySelector('#playZone');
    let playzoneWidth = playzone.clientWidth - 30;
    let playzoneHeight = playzone.clientHeight - 30;
    

///////////////////////////////// ANIMATION /////////////////////////////////


    if (this.moveLeft == true || this.moveUp == true || this.moveRight == true || this.moveDown == true) {
      this.characterBody.classList.remove(this.className);
      this.characterBody.classList.add(this.classNameMove);
    }

    if (this.moveLeft == false || this.moveUp == false || this.moveRight == false || this.moveDown == false) {
      this.characterBody.classList.remove(this.classNameMove);
      this.characterBody.classList.add(this.className);
    }

//////////////////////////// MOVEMENT & ROTATION ////////////////////////////

    if (this.moveUp == true) {
      clearClassRotate
      this.characterBody.classList.add("rotateLess90");
      this.characterBody.style.top = (PositionY - step) + "px";
    }

    if (this.moveUp == true && this.moveLeft == true) {
      clearClassRotate
      this.characterBody.classList.add("rotateLess135");
      this.characterBody.style.top = (PositionY - step) + "px";
      this.characterBody.style.left = (PositionX - step) + "px";
    }

    if (this.moveUp == true && this.moveRight == true) {
      clearClassRotate
      this.characterBody.classList.add("rotateLess45");
      this.characterBody.style.top = (PositionY - step) + "px";
      this.characterBody.style.left = (PositionX + step) + "px";
    }

    if (this.moveLeft == true) {
      clearClassRotate
      this.characterBody.classList.add("rotate180");
      this.characterBody.style.left = (PositionX - step) + "px";
    }

    if (this.moveRight == true) {
      clearClassRotate
      this.characterBody.style.left = (PositionX + step) + "px";
    }

    if (this.moveDown == true) {
      clearClassRotate
      this.characterBody.classList.add("rotate90");
      this.characterBody.style.top = (PositionY + step) + "px";
    }

    if (this.moveDown == true && this.moveLeft == true) {
      clearClassRotate
      this.characterBody.classList.add("rotate135");
      this.characterBody.style.top = (PositionY + step) + "px";
      this.characterBody.style.left = (PositionX - step) + "px";
    }

    if (this.moveDown == true && this.moveRight == true) {
      clearClassRotate
      this.characterBody.classList.add("rotate45");
      this.characterBody.style.top = (PositionY + step) + "px";
      this.characterBody.style.left = (PositionX + step) + "px";
    }

    if (PositionX + characterWidth === playzoneWidth) {
      console.log("arrêt !");
      
    }
  }
}



// creation de personnages
// class Character{
//   constructor(name) {
//     this.name=name;
//   }
// }
// let hitman= new Character('hitmain');
// let robot= new Character('robot');
// let soldier= new Character('soldier');
// let zombie= new Character('zombie');
//
// let pTableau = [hitman, robot, soldier,zombie];
//
//
// for (let i = 0; i < pTableau.length; i++) {
//
//   console.log(pTableau[i])
//
// };

// function characterPlayerSelected (contour)
// {
// 	if(contour == 1){
// 		$('character-playerOne-isselected').css('border','5px outset lawngreen');
// 		document.querySelector('character-playerOne-isselected').value = 1;
// 	}
//   if(contour == 2){
// 		$('character-playerTwo-isselected').css('border','5px outset #f00c93');
// 		document.getElementById('#').value = 2;
// 	}
// }
