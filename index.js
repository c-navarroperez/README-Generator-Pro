const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        // Boolean choice to begin process
        name: 'createReadMeChoice',
        question: 'Begin README.md file generator? (y/n)',
    },
    { 
        name: 'projectTitle', 
        question: 'Enter project title:' 
    },
    {
        name: 'description',
        question: 'Enter project description:'
    },
    // {
    //     name: 'tableOfContents',
    //     question:'?'
    // },
    {
        name: 'installation',
        question: 'Enter installation intructions:',
    },
    { 
        name: 'usage', 
        question: 'Enter use instructions:' 
    },
    {
        name: 'license',
        question: 'Choose a license for your project:',
    },
    {
        name: 'contributing',
        question: 'Enter contribution section:',
    },
    { 
        name: 'tests', 
        question: 'Enter tests section text:' 
    },
    {
        name: 'questions',
        question: 'Enter instructions on how to contact the project admin. for feedback or questions:',
    },
    {
        name: 'githubUserName',
        question: 'Enter GitHub username:',
    },
    {
        name: 'emailAdress',
        question: 'Enter email address for your feedback contact:',
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

}

// function call to initialize program
init();
