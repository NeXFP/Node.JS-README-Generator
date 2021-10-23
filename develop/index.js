// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your username on GitHub?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email address you would like to use?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title for the current project?"
    },
    {
        type: "input",
        name: "description",
        message: "Here you will write a basic description of the project:"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install the software required for this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is the project used?"
    },
    {
        type: "list",
        name: "licensing",
        choices: ["MIT", "Apache","GPL", "None"],
        message: "Which license does your project have?"

    },
    {
        type: "input",
        name: "contributions",
        message: "Who contributed to this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Generating README here!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        const fileName = "README.md";
        writeToFile(fileName, generateMarkdown(data));
    });
}

// Function call to initialize app
init();
