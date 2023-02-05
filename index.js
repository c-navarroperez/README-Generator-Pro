const inquirer = require('inquirer');
const userPrompt = require('./utils/userPrompt');

// Function to initialize program
function init() {
    console.log('\n--------------- README.md File Generator ---------------\n');
    // Choice to begin the process of generating the README file
    inquirer.prompt([
        {
            type:'confirm',
            name: 'createReadMeChoice',
            message: 'Would you like to initialize the README.md file generator?'
        }
    ])
    .then(answers => {
        if (answers.createReadMeChoice){
            // Function call to prompt the user with questions
            userPrompt();
            } else {
                console.log('\n---------------------- Goodbye :) ----------------------\n');
            }   
    });
}

// Function call to initialize program
init();
