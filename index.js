import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your projects title?',
    name: 'title'
}, {
    type: 'input',
    message: 'Describe your project?',
    name: 'description'
}, {
    type: 'input',
    message: 'How do you install your project?',
    name: 'installation'
}, {
    type: 'input',
    message: "What is your project's usage?",
    name: 'usage'
}, {
    type: 'input',
    message: 'Who helped contribute to your project?',
    name: 'contribution'
}, {
    type: 'input',
    message: 'Any test for your application?',
    name: 'test'
}, {
    type: 'list',
    message: 'What is your projects title?',
    name: 'license',
    choices: [
        "Apache license 2.0",
        "Boost Software License 1.0",
        "MIT",
        "Mozilla Public License 2.0",
        "The Unlicense",
        "No license/Add later"
    ]
}, {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
}, {
    type: 'input',
    message: 'What is your Email address?',
    name: 'email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const readMeFile = generateMarkdown(data);
    fs.writeFile(fileName, readMeFile, (err) => {
        if(err) {
            console.error(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('My-ReadMe.md', answers);
        });
}

// Function call to initialize app
init();
