const fsHelper = require("../helper/fsHelper");
const helperFunctions = require("../helper/helperFunctions");

module.exports = class Project {
  constructor(reqObject) {
    this.id = helperFunctions.getUniqueId();
    this.createdOn = new Date().toISOString();
    this.modifiedOn = null;
    this.title = reqObject.title;
    this.description = reqObject.description;
  }

  createProject() {
    const data = fsHelper.projectExtractFileData();
    data.push(this);
    fsHelper.projectWriteFileData(data);
    return this;
  }
};
