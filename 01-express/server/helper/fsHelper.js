const fs = require("fs");
const path = require("path");

const projectDataFilePath = path.join(
  process.cwd(),
  "./server/utils/database",
  "projectData.json"
);

const projectExtractFileData = () => {
  const jsonFileData = fs.readFileSync(projectDataFilePath);
  const fileData = JSON.parse(jsonFileData);
  return fileData;
};

const projectWriteFileData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(projectDataFilePath, stringifyData);
};

module.exports = {
  projectExtractFileData,
  projectWriteFileData,
};
