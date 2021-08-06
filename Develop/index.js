// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// const { generateKey } = require('crypto');

// TODO: Create an array of questions for user input
const questions = [
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
    name: 'projectName',
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
        "Open",
        ""
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
    ]

    // Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        let dataObj = data;
        console.log(dataObj);
        // Create a function to write README file
        fs.writeFile('README.md', generateMarkdown(dataObj), (err) =>
        err ? console.error(err) : console.log('you have successfully saved the info!')); 
    });
    }

// Function call to initialize app
init();
