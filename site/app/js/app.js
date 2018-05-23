class App {

    constructor() {
        this.gameStarted = false;

        this.characterGamer1 = null;
        this.characterGamer2 = null;
    }

    init() {
        this.UIhomePage = new UIHomePage(this);
        this.Map = new Map(this);

        this.player1 = new character('hitmanIdle', 'hitmanMove', 80, 80, "rotate90");
        this.player2 = new character('zombieIdle', 'zombieMove', 1150, 645, "rotateLess90");

        this.controlP1 = new controller(this.player1, 81, 90, 68, 83, 32);
        this.controlP2 = new controller(this.player2, 37, 38, 39, 40, 96);

        this.loop();
    }

    render() {
        if (!this.gameStarted) {
           this.UIhomePage.render();
        }

        this.player1.moveCharacter();
        this.player2.moveCharacter();
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
}
