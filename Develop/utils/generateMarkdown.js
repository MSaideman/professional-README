// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = '';
  if (licenseType = 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }  else {
    return yourLicense = '';}
  };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = license;
  let yourLicenseLink = '';
  if(licenseLink = 'MIT') {
    yourLicenseLink = `https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt`
  } else {
  return yourLicenseLink ='';}
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = license;
  let yourLicenseSection = '';
  if (licenseSection = 'MIT') {
    yourLicenseSection = ``
  } else {
    return yourLicenseSection = '';
  }

}

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
  >${renderLicenseBadge(data.license)}
  >${renderLicenseLink(data.license)}
  >${renderLicenseSection(data.license)}


  ## Contact Information:
  >Please email with any questions involving this project at ${data.email}
`;
}

module.exports = generateMarkdown;
