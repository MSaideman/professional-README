// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseType = license;
let yourLicense = '';
if (licenseType === 'MIT') {
  yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  return yourLicense;
}  else if (licenseType === 'Apache'){
  yourLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  return yourLicense;
} else if (licenseType === 'Academic') {
  yourLicense = `[![License](https://img.shields.io/badge/License-AFL-blue.svg?style=flat)]`
  return yourLicense;
}  else if (licenseType === 'GNU') {
  yourLicense = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)]`
  return yourLicense;
}
else if (licenseType === 'ISC') {
  yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  return yourLicense;
}
else if (licenseType === 'Mozilla') {
  yourLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
  return yourLicense;
}
else if (licenseType === 'Open') {
  yourLicense = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]`
  return yourLicense;
}
else {
  return yourLicense = '';}
};

// Create a function that returns the license link
// If there is no license, return an empty string
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
else if (licenseLink === 'ISC') {
  yourLicenseLink = `(https://opensource.org/licenses/ISC)`
  return yourLicenseLink;
}   else if (licenseLink === 'Mozilla') {
  yourLicenseLink = `(https://opensource.org/licenses/MPL-2.0)`
  return yourLicenseLink;
} else if (licenseLink === 'Open') {
  yourLicenseLink = `(https://opendatacommons.org/licenses/by/)`
  return yourLicenseLink;
} 
else {
return yourLicenseLink ='';}
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseSection = license;
let yourLicenseSection = '';
if (licenseSection === 'MIT') {
  yourLicenseSection = `##License`
  return yourLicenseSection;
} else if (licenseSection === 'Apache') {
    yourLicenseSection = `##License`
    return yourLicenseSection;
} else if(licenseSection === 'Academic') {
    yourLicenseSection = `##License`
    return yourLicenseSection;
}
else if(licenseSection === 'GNU') {
    yourLicenseSection = `##License`
    return yourLicenseSection;
} else if(licenseSection === 'ISC') {
    yourLicenseSection = `##License`
    return yourLicenseSection;
}
else if(licenseSection === 'Mozilla') {
    yourLicenseSection = `##License`
    return yourLicenseSection;
}
else if(licenseSection === 'Open') {
    yourLicenseSection = `##License`
    return yourLicenseSection;
}
else {
  return yourLicenseSection = '';
}

}

//Create a function to generate markdown for README
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

${renderLicenseSection(data.license)}
>${data.license}
>${renderLicenseBadge(data.license)}
>${renderLicenseLink(data.license)}

## Contact Information:
>Please email with any questions involving this project at ${data.email}
`;
}

module.exports = generateMarkdown;