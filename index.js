// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
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
        name: "uses",
        message: "How is the project used?"
    },
    {
        type: "list",
        name: "Licensing",
        message: "Which license does your project have?",
        choices: ["MIT", "Apache","GPL"]

    },
    {
        type: "input",
        name: "contributions",
        message: "Who contributed to this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
