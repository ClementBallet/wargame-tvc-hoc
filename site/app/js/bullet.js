class bullet {
  constructor(className, rotateClassName, player, collisionList) {
    this.classNameBullet = className;
    this.rotateClassName = rotateClassName;
    this.character = player;
    this.collisionList = collisionList;

    this.rebond = 3;

    this.bulletSpeedX = 10;
    this.bulletSpeedY = 10;

    this.isDestroy = false;
    this.createBullet();
  };

  createBullet() {

      let playZone = document.querySelector('#playZone');
      this.bullet = document.createElement('div');
      playZone.appendChild(this.bullet);
      this.bullet.classList.add('bullet', this.classNameBullet);

      let classCharacter = this.character.characterBody.classList;

      let characterBodyX = this.character.characterBody.offsetLeft;
      let characterBodyY = this.character.characterBody.offsetTop;


      let PositionLeftX = characterBodyX - 9 + 'px';
      let PositionLeftY = characterBodyY + 9 + 'px';
      let PositionTopX = characterBodyX + 31 + 'px';
      let PositionTopY = characterBodyY - 12 + 'px';
      let PositionRightX = characterBodyX + this.character.characterBody.offsetWidth + 'px';
      let PositionRightY = characterBodyY + 29 + 'px';
      let PositionBottomX = characterBodyX + 9 + 'px';
      let PositionBottomY = characterBodyY + this.character.characterBody.offsetWidth + 'px';
      let PositionTopLeftX = characterBodyX + 6 + 'px';
      let PositionTopLeftY = characterBodyY - 9 + 'px';
      let PositionTopRightX = characterBodyX + 48 + 'px';
      let PositionTopRightY = characterBodyY + 3 + 'px';
      let PositionBottomRightX = characterBodyX + this.character.characterBody.offsetWidth - 14 + 'px';
      let PositionBottomRightY = characterBodyY + this.character.characterBody.offsetHeight + 3 + 'px';
      let PositionBottomLeftX = characterBodyX - 9 + 'px';
      let PositionBottomLeftY = characterBodyY + this.character.characterBody.offsetHeight - 8 + 'px';

//////////////////////////// INIT POSITION & ROTATION /////////////////////////

      // Bullet to Left
      if (classCharacter.contains('rotate180')  == true) {
      this.bullet.style.left = PositionLeftX;
      this.bullet.style.top = PositionLeftY;
      this.bullet.classList.add('rotate180')
      }

      // Bullet to Top
      if (classCharacter.contains('rotateLess90')  == true) {
      this.bullet.style.left = PositionTopX;
      this.bullet.style.top = PositionTopY;
      this.bullet.classList.add('rotateLess90');
      }

      // Bullet to Right
      if (classCharacter.contains('rotate0')  == true) {
      this.bullet.style.left = PositionRightX;
      this.bullet.style.top = PositionRightY;
      this.bullet.classList.add('rotate0');
      }

      // Bullet to Bottom
      if (classCharacter.contains('rotate90')  == true) {
      this.bullet.style.left = PositionBottomX;
      this.bullet.style.top = PositionBottomY;
      this.bullet.classList.add('rotate90');
      }

      //Bullet to Top left
      if (classCharacter.contains('rotateLess135')  == true) {
      this.bullet.style.left = PositionTopLeftX;
      this.bullet.style.top = PositionTopLeftY;
      this.bullet.classList.add('rotateLess135');
      }

      //Bullet to Top Right
      if (classCharacter.contains('rotateLess45')  == true) {
      this.bullet.style.left = PositionTopRightX;
      this.bullet.style.top = PositionTopRightY;
      this.bullet.classList.add('rotateLess45');
      }

      //Bullet to Bottom Right
      if (classCharacter.contains('rotate45')  == true) {
      this.bullet.style.left = PositionBottomRightX;
      this.bullet.style.top = PositionBottomRightY;
      this.bullet.classList.add('rotate45');
      }

      //Bullet to Bottom Left
      if (classCharacter.contains('rotate135')  == true) {
      this.bullet.style.left = PositionBottomLeftX;
      this.bullet.style.top = PositionBottomLeftY;
      this.bullet.classList.add('rotate135');
      }


    }

    destroyBullet(){
        this.bullet.parentElement.removeChild(this.bullet);
        this.isDestroy = true;
    }

    moveBullet(){

//////////////////////////// VARIABLES ////////////////////////////

      // let classCharacter = this.character.characterBody.classList;

      let currentBulletPositionX = this.bullet.offsetLeft;
      let currentBulletPositionY = this.bullet.offsetTop;

      let playzoneLeft = document.querySelector('#playZone').offsetLeft;
      let playzoneTop = document.querySelector('#playZone').offsetTop;
      let playzoneWidth = document.querySelector('#playZone').offsetWidth;
      let playzoneHeight = document.querySelector('#playZone').offsetHeight;
      let playZoneBorder = 15;

//////////////////////////// MOVEMENT ////////////////////////////


      // Bullet to Left
      // if (classCharacter.contains('rotate180')  == true)
      if (this.rotateClassName == 'rotate180') {
      currentBulletPositionX -= this.bulletSpeedX;
      this.bullet.style.left = currentBulletPositionX + 'px';
      }

      // Bullet to Top
      if (this.rotateClassName == 'rotateLess90') {
      currentBulletPositionY -= this.bulletSpeedY;
      this.bullet.style.top = currentBulletPositionY + 'px'
      }

      // Bullet to Right
      if (this.rotateClassName == 'rotate0') {
      currentBulletPositionX += this.bulletSpeedX;
      this.bullet.style.left = currentBulletPositionX + 'px';
      }

      // Bullet to Bottom
      if (this.rotateClassName == 'rotate90') {
      currentBulletPositionY += this.bulletSpeedY;
      this.bullet.style.top = currentBulletPositionY + 'px';
      }

      //Bullet to Top left
      if (this.rotateClassName == 'rotateLess135') {
      currentBulletPositionX -= this.bulletSpeedX;
      currentBulletPositionY -= this.bulletSpeedY;
      this.bullet.style.left = currentBulletPositionX + 'px';
      this.bullet.style.top = currentBulletPositionY + 'px';
      }

      //Bullet to Top Right
      if (this.rotateClassName == 'rotateLess45') {
      currentBulletPositionX += this.bulletSpeedX;
      currentBulletPositionY -= this.bulletSpeedY;
      this.bullet.style.left = currentBulletPositionX + 'px';
      this.bullet.style.top = currentBulletPositionY + 'px';
      }

      //Bullet to Bottom Right
      if (this.rotateClassName == 'rotate45') {
      currentBulletPositionX += this.bulletSpeedX;
      currentBulletPositionY += this.bulletSpeedY;
      this.bullet.style.left = currentBulletPositionX + 'px';
      this.bullet.style.top = currentBulletPositionY + 'px';
      }

      //Bullet to Bottom Left
      if (this.rotateClassName == 'rotate135') {
      currentBulletPositionX -= this.bulletSpeedX;
      currentBulletPositionY += this.bulletSpeedY;
      this.bullet.style.left = currentBulletPositionX + 'px';
      this.bullet.style.top = currentBulletPositionY + 'px';
      }

//////////////////// COLLISIONS AND BOUNCES ON BORDER ///////////////////

      if (currentBulletPositionX < 0 + playZoneBorder) {
      this.bulletSpeedX = -this.bulletSpeedX;
      this.rebond--;
      }

      if (currentBulletPositionX > playzoneWidth - playZoneBorder) {
      this.bulletSpeedX = -this.bulletSpeedX;
      this.rebond--;
      }

      if (currentBulletPositionY < 0 + playZoneBorder) {
        this.bulletSpeedY = -this.bulletSpeedY;
        this.rebond--;
      }

      if (currentBulletPositionY > playzoneHeight - playZoneBorder) {
        this.bulletSpeedY = -this.bulletSpeedY;
        this.rebond--;
      }

      if(this.rebond == 0){
        this.destroyBullet();
      }

    }

    checkCollision() {
       for (let i = 0; i < this.collisionList.length; i++) {

         let bulletTop = this.bullet.offsetTop;
         let bulletLeft = this.bullet.offsetLeft;
         let bulletWidth = this.bullet.offsetWidth;
         let bulletHeight = this.bullet.offsetHeight;
         let bulletRight = bulletLeft + bulletWidth;
         let bulletBottom = bulletTop + bulletHeight;

         let objectTop = this.collisionList[i].characterBody.offsetTop;
         let objectLeft = this.collisionList[i].characterBody.offsetLeft;
         let objectWidth = this.collisionList[i].characterBody.offsetWidth;
         let objectHeight = this.collisionList[i].characterBody.offsetHeight;
         let objectRight = objectLeft + objectWidth;
         let objectBottom = objectTop + objectHeight;

         if (bulletTop > objectTop && bulletTop < objectBottom && bulletLeft > objectLeft && bulletLeft < objectRight) {
            //this.collisionList[i].life--
            this.collisionList[i].loseLife();
            this.destroyBullet()
         }
       }
    }


};
