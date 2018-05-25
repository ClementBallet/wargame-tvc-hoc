class App {

    constructor() {
        this.gameStarted = false;
        this.gameFinished = false;

        this.characterGamer1 = null;
        this.characterGamer2 = null;

        this.gameOver = null;
    }

    init() {
        this.UIhomePage = new UIHomePage(this);
        this.GamePage = new GamePage(this);

        this.loop();
    }

    render() {
      if(this.gameStarted){
        this.GamePage.render();
      }
    }

    loop() {
        var self = this;

        requestAnimationFrame(function () {
            self.render();
            self.loop();
        })
    }

    onChooseCharacter(character) {

        // Second click on character, remove data
        if (this.characterGamer1 === character) {
            this.characterGamer1 = null;
            return;
        }

        // Second click on character, remove data
        if (this.characterGamer2 === character) {
            this.characterGamer2 = null;
            return;
        }

        // Set new Value
        if (this.characterGamer1 == null) {
            this.characterGamer1 = character;
        }

        else if (this.characterGamer2 == null) {
            this.characterGamer2 = character;
        }

        console.log('Player 1 is :', this.characterGamer1);
        console.log('Player 2 is :', this.characterGamer2);
    }

    addSelectionFrame(character) {
      if (this.characterGamer1 == null) {
        let t = document.querySelectorAll('li');
        for (let i = 0; i < t.length; i++) {
          t[i].classList.remove('character-playerOne-isselected')
        }
      }

      if (this.characterGamer2 == null) {
        let t = document.querySelectorAll('li');
        for (let i = 0; i < t.length; i++) {
          t[i].classList.remove('character-playerTwo-isselected')
        }
      }

      if (this.characterGamer1 == character) {
        if (character == 'hitman' || character == 'soldier' || character == 'zombie' || character == 'robot') {
          document.getElementById(character).classList.add('character-playerOne-isselected');
        }
      }

      if (this.characterGamer2 == character) {
        if (character == 'hitman' || character == 'soldier' || character == 'zombie' || character == 'robot') {
          document.getElementById(character).classList.add('character-playerTwo-isselected');
        }
      }
    }


    gotoGame(){
      document.querySelector('#homepage').classList.add('displayHidden');
      document.querySelector('#game').classList.remove('displayHidden');

      this.gameStarted = true;

      this.GamePage.init();
    }

    gotoEnd() {
      document.querySelector('#gameOver').classList.remove('displayHidden');

      this.gameFinished = true;

      this.gameOver = new GameOver(this);
    }

    resetGame() {
      this.gameStarted = false;
      this.gameFinished = false;
      this.characterGamer1 = null;
      this.characterGamer2 = null;
      this.gameOver = null;

      let playzone = document.querySelector('#playZone');
      playzone.innerHTML = '';

      let GameOverText = document.querySelector('.GameOverText');
      GameOverText.parentElement.removeChild(GameOverText);

      document.querySelector('#homepage').classList.remove('displayHidden');
      document.querySelector('#game').classList.add('displayHidden');
      document.querySelector('#gameOver').classList.add('displayHidden');
      // document.querySelectorAll('li').classList.remove('character-playerOne-isselected character-playerTwo-isselected')
    }
}
