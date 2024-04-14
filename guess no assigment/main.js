import inquirer from "inquirer";
const sysgenno = Math.floor(Math.random());
const answer = await inquirer.prompt([{
        type: "number",
        name: "system",
        message: "Guess Number:"
    }]);
const { system } = answer;
if (system === sysgenno) {
    console.log("Congratulation your number is correct");
}
else {
    console.log("try again");
}
