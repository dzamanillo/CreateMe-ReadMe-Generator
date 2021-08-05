const inquirer = require("inquirer");
const fs = require("fs");
const writeFile = require("./utils/write-file.js");
const readFile = require("./utils/read-file.js");
const generateReadMe = require("./src/page-template");
const util = require("util");
const path = require("path");

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
			name: "gitHubName",
			message: "What is your GitHub username?",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter username.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "email",
			message: "What is your email address?",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter email address.");
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
			type: "input",
			name: "license",
			message: "Select license",
			default: license.split(" ")[0],
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
	]);
};

let license = fs.readFileSync("LICENSE", "utf-8");

promptUser()
	.then((userInput) => {
		return generateReadMe(userInput, license);
	})
	.then((readMeInfo) => {
		console.log("File Created!");
		return writeFile(readMeInfo, "./dist/README.md");
	})
	.catch((err) => {
		console.log(err);
	});
