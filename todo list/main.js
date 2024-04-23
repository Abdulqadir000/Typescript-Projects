import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "what do you want to add in todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        },
    ]);
    let { addmore, todo } = answer;
    console.log(answer);
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("please add input");
    }
}
if (todos.length > 0) {
    console.log("Your ToDo List:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("Empty");
}
