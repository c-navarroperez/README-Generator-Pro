// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description 
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing) 
    * [Tests](#tests) 
    * [Questions](#questions) 
    
    ## Installation
    ${data.installation}

    ## Usage 
    ${data.usage}

    ## Contributing 
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    ${data.questions}

    Github link: [${data.githubUserName}](https://github.com/${data.githubUserName})

    Email adress: ${data.emailAddress}
    
    ---
    
    ## License 
    Licensed under the [${data.license}](<!-- include link to your license file here-->) license.
  `;
}

module.exports = generateMarkdown;
