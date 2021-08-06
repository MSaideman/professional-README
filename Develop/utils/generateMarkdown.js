// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = '';
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    return yourLicense;
  }  else if (licenseType === 'Apache'){
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    return yourLicense;
  } else if (licenseLink === 'Academic') {
    yourLicense = `[![License](https://img.shields.io/badge/License-AFL-blue.svg?style=flat)]`
    return yourLicense;
  }  else if (licenseLink === 'GNU') {
    yourLicense = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)]`
    return yourLicense;
  }
  else {
    return yourLicense = '';}
  };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = license;
  let yourLicenseLink = '';
  if(licenseLink === 'MIT') {
    yourLicenseLink = `(https://opensource.org/licenses/MIT)`
    return yourLicenseLink;
  } else if (licenseLink === 'Apache') {
    yourLicenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseLink === 'Academic') {
    yourLicenseLink = `(https://opensource.org/licenses/AFL-3.0)`
    return yourLicenseLink;
  } 
  else if (licenseLink === 'GNU') {
    yourLicenseLink = `(https://www.gnu.org/licenses/fdl-1.3)`
    return yourLicenseLink;
  } 
  else {
  return yourLicenseLink ='';}
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = license;
  let yourLicenseSection = '';
  if (licenseSection === 'MIT') {
    yourLicenseSection = ``
    return yourLicenseSection;
  } else if (licenseSection === 'Apache') {
  } else if(licenseSection === 'Academic') {
  }
  else if(licenseSection === 'GNU') {
  }
  else {
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
