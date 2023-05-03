let display = document.getElementById("result");

function addNumber(num) {
  display.value += num;
}

function addOperator(op) {
  display.value += op;
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
}

function clearDisplay() {
  display.value = "";
}
