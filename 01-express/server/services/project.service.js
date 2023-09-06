const fsHelper = require("../helper/fsHelper");
const helperFunctions = require("../helper/helperFunctions");

module.exports = class Project {
  constructor(reqObject, id) {
    this.id = id ? id : helperFunctions.getUniqueId();
    this.createdOn = id ? null : new Date().toISOString();
    this.modifiedOn = id ? new Date().toISOString() : null;
    this.title = reqObject.title;
    this.description = reqObject.description;
    this.date = reqObject.date;
    this.technology = reqObject.technology;
    this.library = reqObject.library;
  }

  createProject() {
    const dataList = fsHelper.projectExtractFileData();
    dataList.push(this);
    fsHelper.projectWriteFileData(dataList);
    return this;
  }

  static readProjectList() {
    const dataList = fsHelper.projectExtractFileData();
    return dataList;
  }

  static readProjectById(id) {
    const dataList = fsHelper.projectExtractFileData();
    const projectData = dataList.find((item, index) => {
      if (item.id == id) {
        return true;
      }
    });
    return projectData;
  }

  updateProject() {
    const dataList = fsHelper.projectExtractFileData();
    const projectIndex = dataList.findIndex((item, index) => {
      if (item.id == this.id) {
        return true;
      }
    });

    if (projectIndex == -1) {
      throw {
        statusCode: 404,
        message: "project not found",
      };
    }
    const oldProjectData = dataList[projectIndex];
    this.createdOn = oldProjectData.createdOn;
    dataList[projectIndex] = this;
    fsHelper.projectWriteFileData(dataList);
    return this;
  }

  static deleteProject(id) {
    const dataList = fsHelper.projectExtractFileData();
    const filteredDataList = dataList.filter((item, index) => {
      if (item.id != id) {
        return true;
      }
    });
    fsHelper.projectWriteFileData(filteredDataList);
    return id;
  }
};
