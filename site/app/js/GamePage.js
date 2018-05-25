class GamePage {
  constructor(app) {
    this.app = app;
    this.gameStarted = false;
  }

  init() {
    this.Map = new Map(this);

    this.player1 = new character(this.app, (this.app.characterGamer1 + 'Idle'), (this.app.characterGamer1 + 'Move'), 80, 80, "rotate90", "bullet1", 3);
    this.player2 = new character(this.app, (this.app.characterGamer2 + 'Idle'), (this.app.characterGamer2 + 'Move'), 1150, 645, "rotateLess90", "bullet2", 3);

    this.player1.collisionList.push(this.player2);
    this.player2.collisionList.push(this.player1);

    this.controlP1 = new controller(this.player1, 81, 90, 68, 83, 32);
    this.controlP2 = new controller(this.player2, 37, 38, 39, 40, 13);

    this.renderHeartLife();
  }

  isGameFinished() {
    if (this.player1.life == 0 || this.player2.life == 0) {
      this.app.gotoEnd();
    }
  }

  render() {
    if(!this.app.gameFinished){
      this.player1.render();
      this.player2.render();
      this.isGameFinished();
    }
  }

  renderHeartLife() {
    let lifePlayer1 = this.player1.life;
    let lifePlayer2 = this.player2.life;
    let divScorePlayerOne = document.querySelector('#scorePlayerOne .hearts');
    let divScorePlayerTwo = document.querySelector('#scorePlayerTwo .hearts');
    let playerName1 = document.querySelector('#playerName1');
    let playerName2 = document.querySelector('#playerName2');
    let inputPlayerOne = document.querySelector('#pseudo1');
    let inputPlayerTwo = document.querySelector('#pseudo2');

    divScorePlayerOne.innerHTML = '';
    divScorePlayerTwo.innerHTML = '';

    for (let i = 0; i < lifePlayer1; i++) {
      let divOneHeart = document.createElement("div");

      playerName1.innerHTML = inputPlayerOne.value + " : ";
      divScorePlayerOne.appendChild(divOneHeart);
      divOneHeart.classList.add("heart");
    }

    for (let i = 0; i < lifePlayer2; i++) {
      let divOneHeart = document.createElement("div");

      playerName2.innerHTML = inputPlayerTwo.value + " : ";
      divScorePlayerTwo.appendChild(divOneHeart);
      divOneHeart.classList.add("heart");
    }
  }
}



class controller {
  constructor(player, left, up, right, down, action) {
    this.player = player;
    this.left = left;
    this.up = up;
    this.right = right;
    this.down = down;
    this.action = action;


    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case this.left:
        this.player.moveLeft = true;
        break;
      case this.up:
        this.player.moveUp = true;
        break;
      case this.right:
        this.player.moveRight = true;
        break;
      case this.down:
        this.player.moveDown = true;
        break;
      case this.action:
        // this.player.pushAction = true;
        this.player.shoot();
        break;
    }
  }

  onKeyUp(event) {
    switch (event.keyCode) {
      case this.left:
        this.player.moveLeft = false;
        break;
      case this.up:
        this.player.moveUp = false;
        break;
      case this.right:
        this.player.moveRight = false;
        break;
      case this.down:
        this.player.moveDown = false;
        break;
      case this.action:
        //this.player.pushAction = false;
        break;
    }
  }
}
