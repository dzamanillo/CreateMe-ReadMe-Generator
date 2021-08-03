const generateReadMe = (inputArr) => {
	return `

# ${inputArr(projectName)}

![license](https://img.shields.io/badge/license-${inputArr(license)}-blue)

## Description 

${inputArr(description)}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)



## Installation

${inputArr(installation)}
<br>

> ${inputArr(installationCode)}

## Usage 

${inputArr(usage)}


## Credits

${inputArr(contributors)}

    `;
};
