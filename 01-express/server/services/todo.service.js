const fsHelper = require("../helper/fsHelper");
const helperFunctions = require("../helper/helperFunctions");

module.exports = class Todo {
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

  createTodo() {
    const dataList = fsHelper.todoExtractFileData();
    dataList.push(this);
    fsHelper.todoWriteFileData(dataList);
    return this;
  }

  static readTodoList() {
    const dataList = fsHelper.todoExtractFileData();
    return dataList;
  }

  static readTodoById(id) {
    const dataList = fsHelper.todoExtractFileData();
    const todoData = dataList.find((item, index) => {
      if (item.id == id) {
        return true;
      }
    });
    return todoData;
  }

  updateTodo() {
    const dataList = fsHelper.todoExtractFileData();
    const todoIndex = dataList.findIndex((item, index) => {
      if (item.id == this.id) {
        return true;
      }
    });

    if (todoIndex == -1) {
      throw {
        statusCode: 404,
        message: "todo not found",
      };
    }
    const oldTodoData = dataList[todoIndex];
    this.createdOn = oldTodoData.createdOn;
    dataList[todoIndex] = this;
    fsHelper.todoWriteFileData(dataList);
    return this;
  }

  static deleteTodo(id) {
    const dataList = fsHelper.todoExtractFileData();
    const filteredDataList = dataList.filter((item, index) => {
      if (item.id != id) {
        return true;
      }
    });
    fsHelper.todoWriteFileData(filteredDataList);
    return id;
  }
};
