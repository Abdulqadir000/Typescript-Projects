import inquirer from "inquirer";

type Ans = {
  numberone: number,
  numbertwo: number,
  operator: string
}
const answer : Ans = await inquirer.prompt([
  {
    type: "number",
    name: "numberone",
    message: "Give first number:",
  },
  {
    type: "number",
    name: "numbertwo",
    message: "Give second number:",
  },
  {
    type: "list",
    name: "operator",
    choices: ["*", "+", "-", "/"],
    message: "Choose operator:"
  }
]);

const { numberone, numbertwo, operator } = answer;

if (numberone && numbertwo && operator) {
  let result: number = 0
  if (operator === "+") {
   result = numberone + numbertwo;
  } else if (operator === "-") {
   result = numberone - numbertwo;
  }
  else (operator === "*"); {
    result = numberone * numbertwo;
  }
  if (operator === "/") {
    result = numberone / numbertwo;
  }
  console.log("Your answer is:" , result);
} else {
  console.log("kindly give correct number");
}
 