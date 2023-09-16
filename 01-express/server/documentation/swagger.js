const baseUrl = require("../helper/config/baseurlConfig");

const todoDoc = require("./content/todo.doc");

// // swagger -----------------------------------------------------------------
module.exports = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Nodejs Todo App API",
    description: "Sample Node API test",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: baseUrl.handleGetApiBaseURLSwagger,
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  // // tags -------------------------------------------------------
  tags: [
    // optional
    // {
    //     name: "User",
    //     description: "users API"
    // },
    // {
    //     name: "Employee",
    //     description: "Employee API"
    // },
    // {
    //     name: "Todo",
    //     description: "Todo Task API"
    // },
    // {
    //     name: "Accounts",
    //     description: "Accounts API"
    // },
    // {
    //     name: "Books",
    //     description: "Books API"
    // },
    // {
    //     name: "Cars",
    //     description: "Cars API"
    // },
  ],
  // // Security Definitions ---------------------------------------------------
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  // // definitions -----------------------------------------------------------------
  definitions: {
    ...todoDoc.todoDefinition,
  },
  // // paths ---------------------------------------------------------------------
  paths: {
    ...todoDoc.todoPath,
  },
};
