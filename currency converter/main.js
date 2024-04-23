"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0033,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.25,
        "PKR": 305,
        "GBP": 1
    },
    "USD": {
        "USD": 276,
        "GBP": 0.84,
        "PKR": 1
    }
};
var answers = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select conversion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter conversion amount: "
    },
]);
var from = answers.from, to = answers.to, amount = answers.amount;
if (from && to && amount) {
    var result = Conversion[from][to] * amount;
    console.log("Your Conversion from ".concat(from, " to ").concat(to, " is ").concat(result));
}
else {
    console.log("invalid input");
}
