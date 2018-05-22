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
    switch (event.keycode) {
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
    switch (event.keycode) {
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
