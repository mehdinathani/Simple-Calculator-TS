import inquirer from 'inquirer';
let nextCal = true;
while (nextCal) {
    const answer = await inquirer.prompt([
        {
            message: "Type your first Number:", type: "number", name: "firstNumber"
        },
        {
            message: "Type your second Number:", type: "number", name: "secondNumber"
        },
        {
            message: "Select your operator:", type: "list", name: "operator", choices: [
                "Addition", "Substraction", "Multiplication", "Division"
            ]
        },
    ]);
    if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operator === "Substraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operator === "Division") {
        console.log(answer.firstNumber / answer.secondNumber);
    }
    var confirmationAsk = await inquirer.prompt([{ message: "Do you want another calculation?", type: "list", choices: ["Yes", "No"], name: "confirmation" },]);
    if (confirmationAsk.confirmation === "No") {
        nextCal = false;
    }
}
// console.log(answer);
