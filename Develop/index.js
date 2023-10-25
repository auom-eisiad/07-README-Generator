// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please provide a breif description of your project:",
  },

  {
    type: "confirm",
    name: "confirmInstall",
    message: "Does the program/ application require an installation?",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the installations required?",
    when: (answers) => answers.confirmInstall,
  },

  {
    type: "input",
    name: "usage",
    message:
      "Please provide instructions and examples for usage of your application:",
  },

  {
    type: "list",
    name: "license",
    message: "Please select how you would like to license your project:",
    choices: [
      "None",
      "MIT License",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },

  {
    type: "confirm",
    name: "confirmContribution",
    message:
      "Would you like to allow other developers to contribute your application/ package?",
  },

  {
    type: "input",
    name: "contribution",
    message:
      "Please provide a breif explanation how developers can contribute to your application/ package:",
    when: (answers) => answers.confirmContribution,
  },

  {
    type: "confirm",
    name: "confirmTesting",
    message:
      "Would you like to provide an example on how to test your application?",
  },

  {
    type: "input",
    name: "testing",
    message: "Please provide examples how users can test your application:",
    when: (answers) => answers.confirmTesting,
  },

  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username:",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Processing...");
    fs.writeFile("README.md", generateMarkdown(answers), (err) => {
      if (err) {
        console.error("ERROR: Could not create README.md file", err);
      } else {
        console.log("README.md file created successfully!");
      }
    });
  });
}

// Function call to initialize app
init();
