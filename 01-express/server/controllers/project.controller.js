const Project = require("../services/project.service");

exports.postCreateProject = (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      throw {
        statusCode: 400,
        message: "Please provide all project detail",
      };
    }

    const reqObject = { title, description };
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
