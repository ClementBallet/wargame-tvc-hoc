class UIHomePage {
    constructor(app) {
        this.app = app;

        this.initDOMElements();
        this.initEvents();
    }

    initDOMElements() {
        this.el = document.querySelector('#homepage');
        this.inputPlayerOne = this.el.querySelector('#pseudo1');
        this.inputPlayerTwo = this.el.querySelector('#pseudo2');
        this.characterSelector = this.el.querySelector('#character-selector');
        this.charactersList = this.characterSelector.querySelectorAll('.character');

    }

    initEvents() {
        // Events on inputs
        this.inputPlayerOne.addEventListener('keypress', this.onChangeInput.bind(this));
        this.inputPlayerTwo.addEventListener('keypress', this.onChangeInput.bind(this));

        // Events on characters list
        for (let i = 0; i < this.charactersList.length; i++) {
            let a = this.charactersList[i];
            a.addEventListener('click', this.onChooseCharacter.bind(this));
        }

        // Event on Start button
        this.el.querySelector('.start').addEventListener('click', this.onClickButton.bind(this));
    }

    onChangeInput(event) {
      let pseudo = event.target.value;
      console.log(pseudo);
    }

    onChooseCharacter(event) {
        event.preventDefault();

        let characterChosen = event.target.parentElement.dataset.character;
        this.app.onChooseCharacter(characterChosen);
    }

    onClickButton(event) {
      event.preventDefault();




    }

    render() {

    }
}
