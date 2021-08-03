const { rejects } = require("assert");
const fs = require("fs");

const writeFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/README.md", fileContent, (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "File Created!",
			});
		});
	});
};

module.exports = { writeFile };
