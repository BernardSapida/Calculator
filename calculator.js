function calculate() {
  let firstNumber = +document.getElementById('firstNumber').value;
  let secondNumber = +document.getElementById('secondNumber').value;
  let operation = document.getElementById('operation').value

  if(operation == "add") alert(firstNumber + secondNumber)
  else if(operation == "subtract") alert(firstNumber - secondNumber)
  else if(operation == "multiply") alert(firstNumber * secondNumber)
  else if(operation == "divide") alert(firstNumber / secondNumber)
  else alert("Select operation!");
}