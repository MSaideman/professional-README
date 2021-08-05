// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer 
.prompt ([
    {
    type: 'input',
    name: 'username',
    message:'What is your GitHub username?'
    },
    {
    type: 'input',
    name: 'email',
    message:'What is your email address?'
    },
    {
    type: 'input',
    name: 'project-name',
    message:"What is your project's name?"
    },
    {
    type: 'input',
    name: 'description',
    message:'Please write a short description of your project'
    },
    {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
        ]
    },
    {
    type: 'input',
    name: 'install',
    message:'What command should be run to install dependecies?'
    },
    {
    type: 'input',
    name: 'tests',
    message:'What command should be run to run tests?'
    },
    {
    type: 'input',
    name: 'about',
    message:'What does that user need to know about using the repo?'
    },
    {
    type: 'input',
    name: 'contribution',
    message:'What does the user need to know about contributing to the repo?'
    },
])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
