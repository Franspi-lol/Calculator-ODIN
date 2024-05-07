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

var number1 = 0;
var number2 = 0;
var storedValue = false;
var resolved = true;
var operator = "";
var displayValue = document.getElementById("displayValue");
var decimal = false;

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
    changeDisplay(boton.id);
  });
});

document.getElementById("clr").addEventListener("click", () => {
  clearAll();
});

document.getElementById(".").addEventListener("click", ()=>{
  if (displayValue.innerText.indexOf(".")==-1) {
    changeDisplay(".");
  }
  
})

function changeDisplay(number) {
  if (storedValue == false) {
    displayValue.innerText = displayValue.innerText + number;
  } else {
    number1 = 0;
    number2 = 0;
    operator = 0;
    storedValue = false;
    displayValue.innerText = number;
  }
}


var arrOperador = [...document.querySelectorAll(".operator")];
arrOperador.forEach((boton) => {
  boton.addEventListener("click", () => {
    {
      if (resolved == true) {
        number1 = parseFloat(displayValue.textContent);
      } else {
        number2 = parseFloat(displayValue.textContent);
        if (!checkDiv0(operator, number2)) {
          number1 = operate(number1, number2, operator);
        }
      }
      displayValue.innerText = "";
      operator = boton.id;
      storedValue = false;
      resolved = false;
    }
  });
});

document.getElementById("=").addEventListener("click", () => {
  if (storedValue == false) {
    number2 = parseFloat(displayValue.textContent);
    if (!checkDiv0(operator, number2)) {
      displayValue.innerText = operate(number1, number2, operator);
      number1 = parseFloat(displayValue.innerText);
      storedValue = true;
    }
  } else {
    displayValue.innerText = operate(number1, number2, operator);
    number1 = parseFloat(displayValue.innerText);
  }
  resolved = true;
});

function clearAll() {
  displayValue.innerText = "";
  number1 = 0;
  number2 = 0;
  operator = 0;
  storedValue = false;
  resolved = true;
}

function checkDiv0(operator, num2) {
  if (operator == "/" && num2 == 0) {
    alert("No dividas por cero");
    clearAll();
    return true;
  } else {
    return false;
  }
}
