function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}

var number1= 0;
var number2= 0;
var operator='';
var displayValue = document.getElementById("displayValue");

function operate(n1, n2, operator) {
  switch (operator) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
    default:
      break;
  }
}

var arrBoton = [...document.querySelectorAll(".number")];
arrBoton.forEach((boton) => {
  boton.addEventListener("click", () => {
    changeDisplay(boton.id)
  });
});

document.getElementById('clr').addEventListener('click', ()=>{
    displayValue.innerText = '';
})

function changeDisplay(number) {
  displayValue.innerText = displayValue.innerText + number;
}
console.log(displayValue.innerText);

var arrOperador = [...document.querySelectorAll('.operator')];
arrOperador.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        /* if(number1==0) */
        {
            number1=parseInt(displayValue.textContent);
            displayValue.innerText = '';
            operator=boton.id;
        }
    })
})

document.getElementById('=').addEventListener('click', ()=>{
    /* if(operator!='') */
    {
        number2=parseInt(displayValue.textContent);
        displayValue.innerText=operate(number1, number2, operator);
        number1=parseInt(displayValue.innerText);
        console.log(number1);
    }
})