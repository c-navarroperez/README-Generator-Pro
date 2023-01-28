const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    // {
    //     // Boolean choice to begin process
    //     name: 'createReadMeChoice',
    //     message: 'Begin README.md file generator? (y/n)',
    // },
    { 
        type: 'input',
        name: 'projectTitle', 
        message: 'Enter project title:' 
    },
    {
        name: 'description',
        message: 'Enter project description:'
    },
    // {
    //     name: 'tableOfContents',
    //     message:'?'
    // },
    {
        name: 'installation',
        message: 'Enter installation intructions:',
    },
    { 
        name: 'usage', 
        message: 'Enter use instructions:' 
    },
    {
        name: 'license',
        message: 'Choose a license for your project:',
    },
    {
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    { 
        name: 'tests', 
        message: 'Enter test instructions:' 
    },
    {
        name: 'questions',
        message: 'Enter instructions on how to contact the project admin. for feedback or questions:',
    },
    {
        name: 'githubUserName',
        message: 'Enter GitHub username:',
    },
    {
        name: 'emailAdress',
        message: 'Enter email address for your feedback contact:',
    },
    // {
        // Save to a file location
        // Request path location : "Select location to save the file:"
    // },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log('--------------- README.md File Generator ---------------')

    inquirer.prompt(questions)
    .then((answers) => {
         // Use user feedback for... whatever!!
        console.log(answers);
    })
    // .catch((error) => {
    //     if (error.isTtyError) {
    //       // Prompt couldn't be rendered in the current environment
    //     } else {
    //       // Something else went wrong
    //     }
    // });
}

// function call to initialize program
init();
