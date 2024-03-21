import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message: "Enter ypur first number", type :"number", name: "firstNumber"},
    {message: "Enter ypur second number", type :"number", name: "secondNumber"},
    {message: "select one of operators to perform action", type: "list", namespace: "operator", choices:["ADDITION","SUBTRACTION","MULTIPLICATION","DIVISION"]}

])

if (answer.operator === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.operator === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.operator === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
  } else {
    console.log('Please select a valid operator');
  }