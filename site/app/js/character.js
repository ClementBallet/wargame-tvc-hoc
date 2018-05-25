class character {
  constructor(app, classNameIdle, classNameMove, startPositionX, startPositionY, startRotateClassName, classNameBullet, life) {
      this.app = app;
      this.className = classNameIdle;
      this.classNameMove = classNameMove;
      this.startPositionX = startPositionX;
      this.startPositionY = startPositionY;
      this.startRotateClassName = startRotateClassName;
      this.classNameBullet = classNameBullet;
      this.characterBody = null;
      this.life = life;

      this.rotateClassName = this.startRotateClassName;

      this.collisionList = [];

      this.moveUp = false;
      this.moveLeft = false;
      this.moveDown = false;
      this.moveRight = false;

      this.bullets = [];

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

  loseLife(){
      this.life--;
      console.log(this.app)
      this.app.GamePage.renderHeartLife()
  }

  render(){
    this.moveCharacter();

    for(let i = 0; i < this.bullets.length; i++){
      this.bullets[i].moveBullet();
      this.bullets[i].checkCollision();

      if(this.bullets[i].isDestroy == true){
        this.bullets.splice(i, 1);
      }
    }
  }

  moveCharacter() {

///////////////////////////////// VARIABLES /////////////////////////////////

    //this.character = document.getElementByClassName(this.id)
    const step = 4;
    let PositionX = this.characterBody.offsetLeft;
    let PositionY = this.characterBody.offsetTop;
    let characterWidth = this.characterBody.getBoundingClientRect().width;
    let characterHeight = this.characterBody.getBoundingClientRect().height;
    let PositionRight = PositionX + characterWidth;
    let PositionBottom = PositionY + characterHeight;

    let clearClassRotate = this.characterBody.classList.remove("rotate90", "rotate180", "rotateLess90", "rotate45", "rotate135", "rotateLess45", "rotateLess135", "rotate0");

    let playzone = document.querySelector('#playZone');
    let playzoneWidth = playzone.clientWidth;
    let playzoneHeight = playzone.clientHeight;
    let playzoneBorder = 15;

///////////////////////////////// ANIMATION /////////////////////////////////


    if (this.moveLeft == true || this.moveUp == true || this.moveRight == true || this.moveDown == true) {
      this.characterBody.classList.remove(this.className)
      this.characterBody.classList.add(this.classNameMove)
    }

    if (this.moveLeft == false || this.moveUp == false || this.moveRight == false || this.moveDown == false) {
      this.characterBody.classList.remove(this.classNameMove)
      this.characterBody.classList.add(this.className)
    }

//////////////////////////// MOVEMENT & ROTATION ////////////////////////////

    if (this.moveUp == true) {
      clearClassRotate
      this.rotateClassName = "rotateLess90";
      //this.characterBody.classList.add("rotateLess90");
      this.characterBody.style.top = (PositionY - step) + "px";
    }



    if (this.moveLeft == true) {
      clearClassRotate
      this.rotateClassName = "rotate180";
      // this.characterBody.classList.add("rotate180");
      this.characterBody.style.left = (PositionX - step) + "px";
    }

    if (this.moveRight == true) {
      clearClassRotate
      this.rotateClassName = "rotate0";
      this.characterBody.style.left = (PositionX + step) + "px";
    }

    if (this.moveDown == true) {
      clearClassRotate
      this.rotateClassName = "rotate90";
      // this.characterBody.classList.add("rotate90");
      this.characterBody.style.top = (PositionY + step) + "px";
    }

    if (this.moveDown == true && this.moveLeft == true) {
      clearClassRotate
      this.rotateClassName = "rotate135";
      // this.characterBody.classList.add("rotate135");
      this.characterBody.style.top = (PositionY + step) + "px";
      this.characterBody.style.left = (PositionX - step) + "px";
    }

    if (this.moveDown == true && this.moveRight == true) {
      clearClassRotate
      this.rotateClassName = "rotate45";
      // this.characterBody.classList.add("rotate45");
      this.characterBody.style.top = (PositionY + step) + "px";
      this.characterBody.style.left = (PositionX + step) + "px";
    }

    if (this.moveUp == true && this.moveLeft == true) {
      clearClassRotate

      this.rotateClassName = "rotateLess135";
      //this.characterBody.classList.add("rotateLess135");
      this.characterBody.style.top = (PositionY - step) + "px";
      this.characterBody.style.left = (PositionX - step) + "px";
    }

    if (this.moveUp == true && this.moveRight == true) {
      clearClassRotate
      this.rotateClassName = "rotateLess45";
      // this.characterBody.classList.add("rotateLess45");
      this.characterBody.style.top = (PositionY - step) + "px";
      this.characterBody.style.left = (PositionX + step) + "px";
    }

    this.characterBody.classList.add(this.rotateClassName);


///////////////////////// COLLISIONS WITH BORDER ////////////////////////////

    // Gestion de la collision avec le bord droit de la map
    if (PositionRight > playzoneWidth - playzoneBorder) {
       this.characterBody.style.left = (playzoneWidth - characterWidth - playzoneBorder) + 'px';
    }
    // Gestion de la collision avec le bord gauche de la map
    if (PositionX < 0 + playzoneBorder) {
      this.characterBody.style.left = (0 + playzoneBorder) + 'px';
    }
    // Gestion de la collision avec le bord haut de la map
    if (PositionY < 0 + playzoneBorder) {
      this.characterBody.style.top = (0 + playzoneBorder) + 'px';
    }
    // Gestion de la collision avec le bord bas de la map
    if (PositionBottom > playzoneHeight - playzoneBorder) {
      this.characterBody.style.top = (playzoneHeight - characterHeight - playzoneBorder) + 'px';
    }
  }

  shoot(){
      let b = new bullet(this.classNameBullet, this.rotateClassName, this, this.collisionList);
      this.bullets.push(b);
  }

}
