const express = require("express");

const todoController = require("../controllers/todo.controller");

const router = express.Router();

router.post("/todo", todoController.postCreateTodo);

router.get("/todo", todoController.getTodoList);

router.get("/todo/:id", todoController.getTodoById);

router.put("/todo/:id", todoController.updateTodoById);

router.delete("/todo/:id", todoController.deleteTodoById);





module.exports = router;
