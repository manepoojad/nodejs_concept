const Project = require("../services/project.service");

exports.postCreateProject = (req, res, next) => {
  try {
    const { title, description } = req.body;
    // debugger

    if (!title || !description) {
      throw {
        statusCode: 400,
        message: "Please provide all user detail",
      };
    }

    const reqObject = { title, description };
    const projectObject = new Project(reqObject);

    const resObject = projectObject.createProject();

    res.status(201).send({
      data: "This is create project res",
    });
  } catch (error) {
    next(error);
  }
};
