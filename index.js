const { prompt } = require("inquirer");
const inquirer = require("inquirer");
const fs = require("fs");
// const generateReadMe = require("./src/page-template.js");
const { writeFile } = require("./utils/generate-readme.js");

const promptUser = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "projectName",
			message: "What is the name of your project?",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter a project name.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "description",
			message: "Please enter a description of your project.",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter a project description.");
					return false;
				}
			},
		},
		{
			type: "list",
			name: "license",
			message: "Select license",
			choices: [
				"afl-3.0",
				"apache-2.0",
				"artistic-2.0",
				"bsl-1.0",
				"bsd-2-clause",
				"bsd-3-clause",
				"bsd-3-clause-clear",
				"cc",
				"cc0-1.0",
				"cc-by-4.0",
				"cc-by-sa-4.0",
				"wtfpl",
				"ecl-2.0",
				"eupl-1.1",
				"agpl-3.0",
				"gpl",
				"gpl-2.0",
				"gpl-3.0",
				"lgpl",
				"lgpl-2.1",
				"lgpl-3.0",
				"isc",
				"lppl-1.3c",
				"ms-pl",
				"mit",
				"mpl-2.0",
				"osl-3.0",
				"postgresql",
				"ofl-1.1",
				"ncsa",
				"unlicense",
				"zlib",
			],
		},
		{
			type: "input",
			name: "installation",
			message: "Please enter installation information about your project.",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter a project installation.");
					return false;
				}
			},
		},
		{
			type: "confirm",
			name: "confirmInstall",
			message: "Would you like to add an install command?",
			default: true,
		},
		{
			type: "input",
			name: "installationCode",
			message: "Please enter command line installation call.",
			when: ({ confirmInstall }) => {
				if (confirmInstall) {
					return true;
				} else {
					return false;
				}
			},
			validate: (confirmInstall) => {
				if (confirmInstall) {
					return true;
				} else {
					console.log("Please enter a project installation.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "usage",
			message: "Please enter usage information.",
		},
		{
			type: "input",
			name: "contributors",
			message: "Please enter contributor information.",
		},
		{
			type: "input",
			name: "tests",
			message: "Please enter testing information.",
		},
		{
			type: "input",
			name: "questions",
			message: "Please enter information for reaching out with questions.",
		},
	]);
};

const generateReadMe = (inputArr) => {
	return `

# ${inputArr.projectName}

![license](https://img.shields.io/badge/license-${inputArr.license}-blue)

## Description 

${inputArr.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)



## Installation

${inputArr.installation}
<br>

> ${inputArr.installationCode}

## Usage 

${inputArr.usage}


## Credits

${inputArr.contributors}

    `;
};

promptUser()
	.then((userInput) => {
		return generateReadMe(userInput);
	})
	.then((readMeInfo) => {
		console.log(readMeInfo);
		return writeFile(readMeInfo);
	})
	.catch((err) => {
		console.log(err);
	});
