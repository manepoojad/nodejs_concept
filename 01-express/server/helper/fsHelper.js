const fs = require("fs");
const path = require("path");

const todoDataFilePath = path.join(
  process.cwd(),
  "./server/utils/database",
  "todoData.json"
);

const todoExtractFileData = () => {
  const jsonFileData = fs.readFileSync(todoDataFilePath);
  const fileData = JSON.parse(jsonFileData);
  return fileData;
};

const todoWriteFileData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(todoDataFilePath, stringifyData);
};

module.exports = {
  todoExtractFileData,
  todoWriteFileData,
};
