// // swagger defination
exports.todoDefinition = {
  todoObject: {
    properties: {
      title: {
        type: "string",
        example: "Learning JavaScript.",
      },
      date: {
        type: "string",
        format: "date",
        // example: "1970-01-01"
      },
      description: {
        type: "string",
        example: "Javascript Description",
      },
      technology: {
        properties: {
          uiTech: {
            type: "string",
            example: "react",
          },
          backEndTech: {
            type: "string",
            example: "python",
          },
        },
      },
      library: {
        type: "array",
        example: ["redux", "saga", "numPy", "pandas"],
        // properties: {
        //     redux: {
        //         type: "boolean",
        //         example: 'true'
        //     },
        //     saga: {
        //         type: "boolean",
        //         example: 'true'
        //     },
        //     numpy: {
        //         type: "boolean",
        //         example: 'false'
        //     },
        //     pandas: {
        //         type: "boolean",
        //         example: 'false'
        //     },
        // }
      },
    },
  },
  updateTodoObj: {
    properties: {
      id: {
        type: "string",
      },
      title: {
        type: "string",
        example: "Learning JavaScript.",
      },
      date: {
        type: "string",
        format: "date",
        // example: "1970-01-01"
      },
      description: {
        type: "string",
        example: "Javascript Description",
      },
      technology: {
        properties: {
          uiTech: {
            type: "string",
            example: "react",
          },
          backEndTech: {
            type: "string",
            example: "python",
          },
        },
      },
      library: {
        type: "array",
        example: ["redux", "saga", "numPy", "pandas"],
      },
    },
  },
};

// library: { redux: false, saga: false, numpy: false, pandas: false }

//  // swagger paths
exports.todoPath = {
  "/todo": {
    post: {
      description: "Create new todo.",
      operationId: "createTodo",
      tags: ["Todo (Learning)"],
      // security: [{ JWT: [] }],
      summary: "Create a new Todo",
      parameters: [
        {
          name: "Todo",
          required: true,
          in: "body",
          type: "object",
          description: "Todo information.",
          schema: {
            $ref: `#/definitions/todoObject`,
          },
        },
      ],
      responses: {
        200: {
          description: "new Todo created successfully.",
          // schema: {
          //     $ref: "#/definitions/todoObject"
          // }
        },
      },
    },
    get: {
      description: "Retrieve Todo Todo list.",
      operationId: "retrieveTodoList",
      tags: ["Todo (Learning)"],
      // security: [{ JWT: [] }],
      summary: "Retrieve Todo list.",
      parameters: [],
      responses: {
        200: {
          description: "Retrieve Todo list successfully.",
          // schema: {
          //     $ref: "#/definitions/todoObject"
          // }
        },
      },
    },
  },
  "/todo/{id}": {
    get: {
      description: "Retrieve specific Todo Todo.",
      operationId: "retrieveTodo",
      tags: ["Todo (Learning)"],
      // security: [{ JWT: [] }],
      summary: "Retrieve Todo.",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "Retrieve specific Todo successfully.",
          // schema: {
          //     $ref: "#/definitions/todoObject"
          // }
        },
      },
    },
    put: {
      description: "Update todo Todo.",
      operationId: "updateTodo",
      tags: ["Todo (Learning)"],
      // security: [{ JWT: [] }],
      summary: "Update Todo",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          type: "string",
        },
        {
          name: "Todo",
          required: true,
          in: "body",
          type: "object",
          description: "Todo information.",
          schema: {
            $ref: `#/definitions/updateTodoObj`,
          },
        },
      ],
      responses: {
        200: {
          description: "Todo Updated successfully.",
          // schema: {
          //     $ref: "#/definitions/todoObject"
          // }
        },
      },
    },
    delete: {
      description: "Todo Todo deleted successfully.",
      operationId: "deleteTodo",
      tags: ["Todo (Learning)"],
      // security: [{ JWT: [] }],
      summary: "Delete Todo.",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "Delete specific Todo successfully.",
          // schema: {
          //     $ref: "#/definitions/todoObject"
          // }
        },
      },
    },
  },
};
