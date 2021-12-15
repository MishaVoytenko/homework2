let sign = prompt("ведите знак");
let firstNumber = +prompt("введите первое число");
let secondNumber = +prompt("введите второе число");
function calc(a, b) {
  let res;
  switch (sign) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
    default:
      return alert("вы ввели не верный знак");
  }

  return res;
}
let result = calc(firstNumber, secondNumber);
alert(firstNumber + " " + sign + " " + secondNumber + " = " + result);
console.log(`${firstNumber} ${sign} ${secondNumber} = ${result}`);
