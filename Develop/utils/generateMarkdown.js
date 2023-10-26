// Condition the license badge based on the user's answer to the license prompt
function renderLicenseBadge(data) {
  if (data.license === "MIT License") {
    return "![License](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (data.license === "GNU AGPLv3") {
    return `![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
  } else if (data.license === "GNU GPLv3") {
    return `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (data.license === "GNU LGPLv3") {
    return `![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
  } else if (data.license === "Mozilla Public License 2.0") {
    return `![License](https://img.shields.io/badge/License-MPL_2.0-blue.svg)`;
  } else if (data.license === "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (data.license === "Boost Software License 1.0") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)`;
  } else if (data.license === "The Unlicense") {
    return `![License](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else {
    return "";
  }
}

// Condition the license content based on the user's answer to the license prompt
function renderLicenseSection(data) {
  const year = new Date().getFullYear();

  if (data.license === "MIT License") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/mit/)
    
    Copyright (c) ${year} ${data.username}`;
  } else if (data.license === "GNU AGPLv3") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/agpl-3.0/)
    
    Copyright (c) ${year} ${data.username}`;
  } else if (data.license === "GNU GPLv3") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/gpl-3.0/)
    
    Copyright (c) ${year} ${data.username}`;
  } else if (data.license === "GNU LGPLv3") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/lgpl-3.0/)
    
    Copyright (c) ${year} ${data.username}`;
  } else if (data.license === "Mozilla Public License 2.0") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/mpl-2.0/)
    
    Copyright (c) ${year} ${data.username}`;
  } else if (data.license === "Apache License 2.0") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/apache-2.0/)]
    
    Copyright (c) ${year} ${data.username}`;
  } else if (data.license === "Boost Software License 1.0") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/bsl-1.0/)
    
    Copyright (c) ${year} ${data.username}`;
  } else if (data.license === "The Unlicense") {
    return `Licensed by: [${data.license}](https://choosealicense.com/licenses/unlicense/)
    
    Copyright (c) ${year} ${data.username}`;
  } else {
    return "";
  }
}

// Generate the markdown of the README file with the user's input 
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}

  ## Description 

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.confirmInstall ? data.installation : "N/A"}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data)}

  ## How to Contribute

  ${data.confirmContribution ? data.contribution : "N/A"}

  ## Tests

  Here is how you can run tests:

  ${data.confirmTesting ? data.testing : "N/A"}

  ## Questions

  If you have any additional questions, you can contact me with the information provided below:

  - GitHub: [${data.username}](https://github.com/${data.username}/)
  - Email:  [${data.email}](${data.email})`;
}

module.exports = generateMarkdown;
