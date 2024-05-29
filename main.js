import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add to your todos?",
        },
        {
            name: "addmore",
            type: "conform",
            message: "do you want to add more?",
            deafauls: "false",
        },
    ]);
    todos.push(addTask.todo);
    console.log(todos);
}
