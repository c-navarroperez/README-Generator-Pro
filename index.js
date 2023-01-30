const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    { 
        type: 'input',
        name: 'title', 
        message: 'Enter project title:' 
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Enter project description:'
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'Enter installation intructions:',
    },
    { 
        type: 'editor',
        name: 'usage', 
        message: 'Enter use instructions:' 
    },
    {
        type: 'editor',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    { 
        type: 'editor',
        name: 'tests', 
        message: 'Enter test instructions:' 
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter email address for your feedback contact:',
    },
    {
        type: 'editor',
        name: 'questions',
        message: 'Enter instructions on how to contact the project admin. for questions, feedback or to report issues:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [  'None',
                    'Apache License 2.0', 
                    'GNU General Public License v3.0', 
                    'MIT License', 
                    'BSD 2-Clause "Simplified" License', 
                    'BSD 3-Clause "New" or "Revised" License', 
                    'Boost Software License 1.0', 
                    'Creative Commons Zero v1.0 Universal', 
                    'Eclipse Public License 2.0', 
                    'GNU Affero General Public License v3.0', 
                    'GNU General Public License v2.0', 
                    'GNU Lesser General Public License v2.1', 
                    'Mozilla Public License 2.0', 
                    'The Unlicense'
                ]
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
    console.log('\n--------------- README.md File Generator ---------------\n');

    // Boolean choice to begin the process of generating the README file
    inquirer.prompt([
        {
            type:'confirm',
            name: 'createReadMeChoice',
            message: 'Would you like to initialize the README.md file generator?'
        }
    ])
    .then(answers => {
        if (answers.createReadMeChoice){
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
            } else {
                console.log('\n---------------------- Goodbye :) ----------------------\n');
            }   
    });
}

// function call to initialize program
init();
