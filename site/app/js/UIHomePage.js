class UIHomePage {
    constructor(app) {
        this.app = app;

        this.initDOMElements();
        this.initEvents();
        this.clearInputsValue();
    }

    initDOMElements() {
        this.el = document.querySelector('#homepage');
        this.inputPlayerOne = this.el.querySelector('#pseudo1');
        this.inputPlayerTwo = this.el.querySelector('#pseudo2');
        this.characterSelector = this.el.querySelector('#character-selector');
        this.charactersList = this.characterSelector.querySelectorAll('.character');
        this.startButton = this.el.querySelector('.start')
    }



    initEvents() {
        // Events on inputs
        this.inputPlayerOne.addEventListener('keyup', this.onChangeInput.bind(this));
        this.inputPlayerTwo.addEventListener('keyup', this.onChangeInput.bind(this));

        // Events on characters list
        for (let i = 0; i < this.charactersList.length; i++) {
            let a = this.charactersList[i];
            a.addEventListener('click', this.onChooseCharacter.bind(this));
        }


        // Event on Start button
        this.startButton.addEventListener('click', this.onClickStartButton.bind(this));
    }

    clearInputsValue() {
      this.inputPlayerOne.value = '';
      this.inputPlayerTwo.value = '';
    }

    onChangeInput(event) {
      let pseudo = event.target.value;
    }

    }
// check if input required
    onChangeInput(event) {
        // Get Value
        console.log(event.target.value);
        let input = event.target;
        let inputValue = input.value;
        let inputErrorMessage = input.parentElement.querySelector('.form-errors');

        // Reset Input
        input.classList.remove('is-valid', 'is-invalid');
        inputErrorMessage.innerHTML = '';
        // Error default value
        let error = {
            hasError : false,
            className : 'is-valid',
            text : ''
        };
        // Check if required
        if(inputValue.length === 0){
            error.hasError = true;
            error.text += '<small class="text-error">Ce champ est requis</small><br>';
        }

        // Check string length min
        if ( inputValue.length>0 && inputValue.length < 3) {
            error.hasError = true;
            error.text += '<small class="text-error">Ce champ est trop court</small>';
        }
        // Check string length max
        if (inputValue.length > 20) {
            error.hasError = true;
            error.text += '<small class="text-error">Ce champ est trop long</small>';
        }

        error.className = (error.hasError)? 'is-invalid' : 'is-valid';
        // Set new values
        input.classList.add(error.className);
        inputErrorMessage.innerHTML = error.text;
    }

    onChooseCharacter(event) {
        event.preventDefault();

        let characterChosen = event.target.parentElement.dataset.character;
        this.app.onChooseCharacter(characterChosen);
    }

    checkButtonStart() {
        if (this.app.characterGamer1) {
            
        } else {

        }
        if (this.app.characterGamer2) {
            
        } else {

        }
    }

    onClickStartButton(event) {
      event.preventDefault();

      this.app.gotoGame();
    };



    render() {

    }
}
