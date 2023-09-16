const Todo = require("../services/todo.service");

exports.postCreateTodo = (req, res, next) => {
  try {
    const { title, description, date, technology, library } = req.body;

    if (!title || !description) {
      throw {
        statusCode: 400,
        message: "Please provide all todo detail",
      };
    }

    const reqObject = { title, description,date, technology, library };
    const todoObject = new Todo(reqObject);

    const resObject = todoObject.createTodo();

    res.status(201).send({
      data: resObject,
      message: "Todo created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getTodoList = (req, res, next) => {
  try {
    const responseData = Todo.readTodoList();
    res.status(201).send(responseData);
  } catch (error) {
    next(error);
  }
};

exports.getTodoById = (req, res, next) => {
  try {
    const id = req.params.id;
    const responseData = Todo.readTodoById(id);
    res.status(201).send(responseData);
  } catch (error) {
    next(error);
  }
};

exports.updateTodoById = (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description,date, technology, library } = req.body;
    const reqObject = { title, description,date, technology, library };
    const todoObject = new Todo(reqObject, id);
    const responseData = todoObject.updateTodo();
    res.status(201).send(responseData);
  } catch (error) {
    next(error);
  }
};

exports.deleteTodoById = (req, res, next) => {
  try {
    const id = req.params.id;
    const responseData = Todo.deleteTodo(id);
    res.status(201).send({
      id: responseData,
      message: "todo deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
