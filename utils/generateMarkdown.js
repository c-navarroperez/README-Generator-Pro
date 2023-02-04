// function to generate markdown for README
function generateMarkdown(data) {
  
  let licenseTag = '';

  switch(data.license) {
    case 'Apache 2.0':
      licenseTag ='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public v3.0':
      licenseTag = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT':
      licenseTag = '[![License: MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'BSD 2-Clause':
      licenseTag = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-Clause':
      licenseTag = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Boost Software 1.0':
      licenseTag = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseTag = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Eclipse Public 1.0':
      licenseTag = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'GNU Affero General Public v3.0':
      licenseTag = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU General Public v2.0':
      licenseTag = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'Mozilla Public 2.0':
      licenseTag = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      licenseTag = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
  }

  return `
  # ${data.title}
  ${licenseTag}

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
  Licensed under the [${data.license}](LICENSE) license.
  `;
}

module.exports = generateMarkdown;
