import inquirer from "inquirer";

let answers: {
    sentence: string,
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence:"
    }
])

let words = answers.sentence.trim().split(" ")
console.log(`Your sentence word count is ${words.length}`)