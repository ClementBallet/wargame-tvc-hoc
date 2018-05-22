//Config Controller
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;
let pushAction = false;


class controller {
  constructor(left, up, right, down, action) {
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
        moveLeft = true;
        break;
      case this.up:
        moveUp = true;
        break;
      case this.right:
        moveRight = true;
        break;
      case this.down:
        moveDown = true;
        break;
      case this.action:
        pushAction = true;
        break;
    }
  }

  onKeyUp(event) {
    switch (event.keycode) {
      case this.left:
        moveLeft = false;
        break;
      case this.up:
        moveUp = false;
        break;
      case this.right:
        moveRight = false;
        break;
      case this.down:
        moveDown = false;
        break;
      case this.action:
        pushAction = false;
        break;
    }
  }
}

let controlP1 = new controller(81, 90, 68, 83, 32);
let controlP2 = new controller(37, 38, 39, 40, 96);
