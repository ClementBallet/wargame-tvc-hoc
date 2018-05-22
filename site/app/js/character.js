class character {
  constructor() {

  }

  moveCharacter() {

    let playzone = document.querySelector('#playzone')
    let characterBody = document.createElement(div)

    playzone.appendChild(characterBody)

    if (moveLeft == true || moveUp == true || moveRight == true || moveDown == true) {
      playzone.getElementByTagName("div").classList.add(this.character + "Move")
    }

//player1
    if (moveUp == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotate180)
    }

    if (moveLeft == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotate90)
    }

    if (moveRight == true) {
      document.querySelector("." + this.character + "Move").classList.add(rotateLess90)
    }
  }
}



// creation de personnages
// class Character{
//   constructor(name) {
//     this.name=name;
//   }
// }
// let hitman= new Character('hitmain');
// let robot= new Character('robot');
// let soldier= new Character('soldier');
// let zombie= new Character('zombie');
//
// let pTableau = [hitman, robot, soldier,zombie];
//
//
// for (let i = 0; i < pTableau.length; i++) {
//
//   console.log(pTableau[i])
//
// };

// function characterPlayerSelected (contour)
// {
// 	if(contour == 1){
// 		$('character-playerOne-isselected').css('border','5px outset lawngreen');
// 		document.querySelector('character-playerOne-isselected').value = 1;
// 	}
//   if(contour == 2){
// 		$('character-playerTwo-isselected').css('border','5px outset #f00c93');
// 		document.getElementById('#').value = 2;
// 	}
// }
