// The required modules needed imported
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions to prompt the user for their input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project:",
  },

  {
    type: "confirm",
    name: "confirmInstall",
    message: "Does the program/ application require an installation?",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the installation(s) required?",
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
      "Please provide a brief explanation how developers can contribute to your application/ package:",
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

// function to write the data to the fileName and if an error occurs, console log the error
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

// Take in the user's input and create a README.md file and if error occurs, console log the error. Else, console log the file created successfully
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
