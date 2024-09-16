function switchBTN(btn){
  const button = document.querySelector(btn);
  //console.log(button);
  if(button.classList.contains('is-toggled')){
    button.classList.remove('is-toggled');
  } else{
    button.classList.add('is-toggled');
  }
}