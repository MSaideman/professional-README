## Professional README Generator

## Description

An application using node.js to use user input from an inquirer function to autopopulate a professional README.md file for their repository.
[Instructional Video](https://)

## URLs

[Deployed URL](https://msaideman.github.io/professional-README/)
[GitHub URL](https://github.com/MSaideman/professional-README)

## Video Tutorial

https://user-images.githubusercontent.com/82477037/128530894-55bcad0a-53e5-47e7-92c9-d68fa0c5e6bd.mp4

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Table of Contents

- [Title](#title)
- [Description](#Description)
- [URLs](#URLs)
- [User Story](#UserStory)
- [Acceptance Criteria](#AcceptanceCriteria)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [License](#License)
- [Contact](#Contact)

## Installation

- npm init
- npm i inquirer
- npm i fs

## Usage

Run the following command to initiate the project:

> node index.js

## License

This project is covered under the MIT License.

## Contributions

> Mackenzie Saideman

## Contact Information

> Please email me with any questions on this project: mbsaideman@gmail.com
