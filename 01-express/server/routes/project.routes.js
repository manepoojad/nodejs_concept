const express = require("express");

const projectController = require("../controllers/project.controller");

const router = express.Router();

router.post("/project", projectController.postCreateProject);

module.exports = router;
