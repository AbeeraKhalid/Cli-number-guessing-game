import inquirer from "inquirer";
import chalk from "chalk";
const latestnumber = Math.floor(Math.random()) * 15;
console.log(chalk.bold.bgCyanBright.italic("Guess a number B/W 1 to 15"));
const Ans = await inquirer.prompt([
    {
        name: "ourguessnumber",
        type: "number",
        message: "Enter your guess number that you want",
    }
]);
if (Ans.ourguessnumber === latestnumber) {
    console.log("Congratulation our guess number is correct!!!");
}
else {
    console.log("our guess number is wrong!!");
}
