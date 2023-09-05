const express = require("express");

const projectController = require("../controllers/project.controller");

const router = express.Router();

router.post("/project", projectController.postCreateProject);

router.get("/project", projectController.getProjectList);

router.get("/project/:id", projectController.getProjectById);




module.exports = router;
