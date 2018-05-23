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
      console.log('lala')
        // Events on inputs
        this.inputPlayerOne.addEventListener('keypress', this.onChangeInput.bind(this));
        this.inputPlayerTwo.addEventListener('keypress', this.onChangeInput.bind(this));

        // Events on characters list
        for (let i = 0; i < this.charactersList.length; i++) {
            let a = this.charactersList[i];
            a.addEventListener('click', this.onChooseCharacter.bind(this));
        }
    }

    onChangeInput(event) {
      console.log(event.target.value);
    }

    onChooseCharacter(event) {
        event.preventDefault();

        let characterChosen = event.target.dataset.character;
        this.app.onChooseCharacter(characterChosen);
    }

    render() {

    }
}