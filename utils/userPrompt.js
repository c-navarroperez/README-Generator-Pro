const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const writeToFile = require('./writeToFile');

// Array of questions for user
const questions = [
    { 
        type: 'input',
        name: 'title', 
        message: 'Enter project title:',
        default: 'Project Title'
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
        choices: [  // 'None',
                    'Apache 2.0', 
                    'GNU General Public v3.0', 
                    'MIT', 
                    'BSD 2-Clause', 
                    'BSD 3-Clause', 
                    'Boost Software 1.0', 
                    'Creative Commons Zero v1.0 Universal', 
                    'Eclipse Public 1.0', 
                    'GNU Affero General Public v3.0', 
                    'GNU General Public v2.0',
                    'Mozilla Public 2.0', 
                    'The Unlicense'
                ]
    },
    {
        type: 'input',
        name: 'path',
        message: 'Enter folder path where the file will be saved to:',
        default: './'
    }
];

// Function to prompt the user with questions
function userPrompt() {
    inquirer.prompt(questions)
    .then((answers) => {
        // Function call to generate README file from template
        const markdown = generateMarkdown(answers);
        // Function call to write README file
        writeToFile(markdown, answers.path);
    })
}

module.exports = userPrompt;
