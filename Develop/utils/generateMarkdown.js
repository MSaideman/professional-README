// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/)
  #Project Title: ${data.projectName}
  Description of project goes here: ${data.description}
  ## Table of Contents:
  - [title](#title)
  - [Prerequisites](#Prerequisites)
  - [Tests](#Tests)
  - [Contributing](#Contributing)
  - [Usage](#Usage) 
  - [License](#License)

  ## Prerequisites:
  >${data.install}
  
  ## Usage:
  >${data.about}

  ## Tests:
  >${data.tests}

  ## Contributions:
  >${data.contribution}

  ## License:
  >${data.license}

  ## Contact Information:
  >Please email with any questions involving this project at ${data.email}
`;
}

module.exports = generateMarkdown;
