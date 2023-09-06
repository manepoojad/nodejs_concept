const Project = require("../services/project.service");

exports.postCreateProject = (req, res, next) => {
  try {
    const { title, description, date, technology, library } = req.body;

    if (!title || !description) {
      throw {
        statusCode: 400,
        message: "Please provide all project detail",
      };
    }

    const reqObject = { title, description,date, technology, library };
    const projectObject = new Project(reqObject);

    const resObject = projectObject.createProject();

    res.status(201).send({
      data: resObject,
      message: "Project created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getProjectList = (req, res, next) => {
  try {
    const responseData = Project.readProjectList();
    res.status(201).send(responseData);
  } catch (error) {
    next(error);
  }
};

exports.getProjectById = (req, res, next) => {
  try {
    const id = req.params.id;
    const responseData = Project.readProjectById(id);
    res.status(201).send(responseData);
  } catch (error) {
    next(error);
  }
};

exports.updateProjectById = (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description,date, technology, library } = req.body;
    const reqObject = { title, description,date, technology, library };
    const projectObject = new Project(reqObject, id);
    const responseData = projectObject.updateProject();
    res.status(201).send(responseData);
  } catch (error) {
    next(error);
  }
};

exports.deleteProjectById = (req, res, next) => {
  try {
    const id = req.params.id;
    const responseData = Project.deleteProject(id);
    res.status(201).send({
      id: responseData,
      message: "project deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
