class GamePage {
  constructor(app) {
    this.app = app;
    this.gameStarted = false;
  }

  IsGameStarted() {
    if (this.gameStarted == false) {

    }
  }

  init() {
    this.Map = new Map(this);

    this.player1 = new character((this.app.characterGamer1 + 'Idle'), (this.app.characterGamer1 + 'Move'), 80, 80, "rotate90");
    this.player2 = new character((this.app.characterGamer2 + 'Idle'), (this.app.characterGamer2 + 'Move'), 1150, 645, "rotateLess90");

    this.controlP1 = new controller(this.player1, 81, 90, 68, 83, 32);
    this.controlP2 = new controller(this.player2, 37, 38, 39, 40, 96);

  }

  render() {
    this.player1.moveCharacter();
    this.player2.moveCharacter();
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
        this.player.pushAction = true;
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
        this.player.pushAction = false;
        break;
    }
  }
}
