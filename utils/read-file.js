const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const readFile = (file) => {
	fs.readFile(file, "utf8", (err, data) => {
		if (err) {
			console.log(err);
			reject(err);
			return;
		}
		resolve({
			ok: true,
			message: "File Created!",
		});
		return data;
	});
};

module.exports = readFile;
