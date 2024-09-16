function switchBTN(btn){
  const button = document.querySelector(btn);
  
  //console.log(button);
  if(button.classList.contains('is-toggled')){
   
    button.classList.remove('is-toggled');
  } else{
    bnt1();
    button.classList.add('is-toggled');
  }
}

function bnt1(){
  const btnToggled = document.querySelector('.is-toggled');
  if(btnToggled){
    btnToggled.classList.remove('is-toggled');
  }
 
}

