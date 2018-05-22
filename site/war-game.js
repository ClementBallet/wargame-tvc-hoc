let inputs = document.querySelectorAll('input');

  for(let i = 0; i < inputs.length; i++){
      let input = inputs[i];
      input.addEventListener('change' , onChangeInput);
      console.log(input);
  }


  function onChangeInput(event) {
      console.log('new input:' , event.target.value);
      //checkAllForm();
}
