class App {

    constructor() {
        this.gameStarted = false;

        this.characterGamer1 = null;
        this.characterGamer2 = null;
    }

    init() {
        this.UIhomePage = new UIHomePage(this);
        this.Map = new Map(this);
        console.log(this.Map);
        this.loop();
    }

    render() {
        if (!this.gameStarted) {
            this.UIhomePage.render();
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
}




/////////////////////////////////////////////////////////////////////////////
class Map {
  constructor() {
    this.canvas = [
      't55', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't53', 't56',
      't52',  't2',  't3',  't6',  't8',  't2',  't7',  't6',  't3',  't8',  't7',  't2',  't3',  't5',  't9',  't5',  't2',  't7',  't5', 't54',
      't52',  't7',  't8', 't21', 't22', 't22', 't22', 't22', 't29', 't29', 't29', 't29', 't22', 't22', 't22', 't22', 't23',  't2',  't3', 't54',
      't52',  't2',  't7', 't28', 't29', 't11', 't29', 't29', 't29', 't12', 't29', 't29', 't29', 't11', 't29', 't29', 't24',  't5',  't8', 't54',
      't52',  't2',  't5', 't29', 't29', 't29', 't16', 't29', 't29', 't29', 't29', 't29', 't13', 't29', 't29', 't14', 't29',  't7',  't8', 't54',
      't52',  't2',  't3', 't29', 't12', 't29', 't29', 't13', 't29', 't29', 't29', 't29', 't29', 't16', 't29', 't29', 't29',  't5',  't8', 't54',
      't52',  't2',  't7', 't29', 't29', 't14', 't29', 't29', 't29', 't29', 't14', 't29', 't29', 't29', 't29', 't29', 't29',  't6',  't8', 't54',
      't52',  't2',  't3', 't29', 't29', 't29', 't12', 't29', 't16', 't29', 't29', 't29', 't29', 't13', 't29', 't29', 't29',  't7',  't8', 't54',
      't52',  't2',  't7', 't28', 't11', 't29', 't29', 't29', 't29', 't29', 't29', 't11', 't29', 't29', 't29', 't14', 't24',  't3',  't8', 't54',
      't52',  't7',  't8', 't27', 't26', 't26', 't26', 't26', 't29', 't29', 't29', 't29', 't26', 't26', 't26', 't26', 't25',  't2',  't3', 't54',
      't52',  't2',  't3',  't6',  't8',  't2',  't7',  't6',  't3',  't8',  't7',  't2',  't3',  't5',  't9',  't5',  't2',  't7',  't5', 't54',
      't58', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't51', 't57',
    ];

    this.createMap();
    this.fillMap();
  }



  createMap() {
    let i = 0;
    let j = 0;
    let td = null;
    let tr = null;

    for (j = 0; j < 12; j++){
      tr = document.createElement("tr")
      document.querySelector('#map').appendChild(tr)
      console.log('test');
      for (i = 0; i < 20; i++) {
        td = document.createElement("td")
        td.style.display = 'inline-block'
        td.classList.add('spriteSheet');
        tr.appendChild(td);
      }


      }
    }


  fillMap() {
    let t = 0;
    let table = document.getElementById('map').getElementsByClassName('spriteSheet');

    for (t = 0; t < 240; t++) {
    table[t].classList.add(this.canvas[t]);
    }
  }
}
