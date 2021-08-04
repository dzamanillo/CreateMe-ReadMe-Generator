const generateReadMe = (inputArr) => {
	return `

# ${inputArr.projectName}

![license](https://img.shields.io/badge/license-${inputArr.license}-blue)

## Description 

${inputArr.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [Credits](#credits)



## Installation

${inputArr.installation}
<br>

> ${inputArr.installationCode}

## Usage 

${inputArr.usage}


## Questions

Please feel free to reach out to me on my [GitHub](https://github.com/${inputArr.gitHubName}).

You can also email me at ${inputArr.email}

## Credits

${inputArr.contributors}

    `;
};

module.exports = generateReadMe;
