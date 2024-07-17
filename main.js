import inquirer from "inquirer";
console.log("                  WELCOME TO A.A TYPESCRIPT QUIZ!!                            ");
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "What is the correct way to check if two values are not equal in typescript",
        choices: ["a==b", "a===b", "a=b", "a!==b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "What is the TypeScript equivalent of undefined",
        choices: ["NULL", "UNDEFINED", "VOID", "NEVER"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which of the following character is commonly allowed in variables names in typescript?",
        choices: ["#", "@", "$", "&"]
    },
    {
        name: "question_4",
        type: "list",
        message: "What does the readonly keyword do in TypeScript?",
        choices: ["PREVENT A VARIABLE FROM BEING ASSIGNED", "PREVENT A VARIABLE FROM BEING ACCESED", "ALLOWED A VARIABLE TO BE RESIGNED FREELY", "ALLOWED A VARIABLE TO BE ACCESED WITTHOUT RESTRICTION"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Which TypeScript feature allows you to combine multiple types into one?",
        choices: ["UNION TYPE", "INTERSECTION TYPE", "GENERIC TYPE", "CONDITIONAL TYPE"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a!==b":
        console.log("1ST. CORRECT!");
        ++score;
        break;
    default:
        console.log("1ST. INCORRECT!");
}
switch (quiz.question_2) {
    case "UNDEFINED":
        console.log("2ND. CORRECT!");
        ++score;
        break;
    default:
        console.log("2ND. INCORRECT!");
}
switch (quiz.question_3) {
    case "$":
        console.log("3RD. CORRECT!");
        ++score;
        break;
    default:
        console.log("3RD. INCORRECT!");
}
switch (quiz.question_4) {
    case "PREVENT A VARIABLE FROM BEING ACCESED":
        console.log("4TH. CORRECT!");
        ++score;
        break;
    default:
        console.log("4TH. INCORRECT!");
}
switch (quiz.question_5) {
    case "UNION":
        console.log("5TH. CORRECT!");
        ++score;
        break;
    default:
        console.log("5TH. INCORRECT!");
}
console.log(`YOUR SCORE IS ${score}`);
console.log("THANKS FOR PLAY A.A TYPESCRIPT QUIZ");
