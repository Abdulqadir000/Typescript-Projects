import inquirer from "inquirer";

let Conversion: {
    [key: string]: {
    [key: string]: number
    }
} = {
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

const answers: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
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

const { from, to, amount } = answers;

if (from && to && amount) {
    let result = Conversion[from][to] * amount;
    console.log(`Your Conversion from ${from} to ${to} is ${result}`);
} else {
    console.log("invalid input");
}
