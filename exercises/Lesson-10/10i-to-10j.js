let calculation = localStorage.getItem('calculation') ||
'';

displayCalculation(calculation);

function updateCalculation(caracter){
  if(caracter ==`''`){
    calculation = '';
  } else if(caracter===`=`){
    // Note: eval() takes a string and runs it as code.
    // Avoid using eval() in real world projects since
    // it can potentially be given harmful code to run.
    // Only use eval() for learning purposes.
    calculation = eval(calculation);

  }else {
    calculation += caracter;
  }

  localStorage.setItem('calculation', calculation);

  displayCalculation(calculation);
}

function displayCalculation(calculation){
  document.querySelector('.js-display-calculation').innerHTML= 
  calculation;
}