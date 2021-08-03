const inquirer = require("inquirer");

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
	]);
};

promptUser().then((input) => {
	console.log(input);
});
