const fs = require("fs");

const writeFile = (fileContent, fileDestination) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileDestination, fileContent, (err) => {
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

module.exports = writeFile;
