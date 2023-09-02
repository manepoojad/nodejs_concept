module.exports = class Project {
  constructor(reqObject) {
    this.title=reqObject.title;
    this.description=reqObject.description;
  }

  createProject() {
    console.log("createProject called",this)
  }
};
