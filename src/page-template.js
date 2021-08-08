// const cleanUpLicense = (license) => {
// 	if (license === "MIT") {
// 		return "MIT";
// 	}
// 	if (license === "APACHE") {
// 		return "Apache%202.0";
// 	}

// 	if (license === "BSD") {
// 		return "BSD";
// 	}

// 	if (license === "GPL") {
// 		return "GPL";
// 	}

// 	return "No%20License";
// };

const generateReadMe = (inputArr, licenseInfo) => {
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
* [License](*license)



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

## License

${licenseInfo}

    `;
};

module.exports = generateReadMe;
