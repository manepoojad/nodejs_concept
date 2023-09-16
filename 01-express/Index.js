const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./server/routes/todo.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./server/documentation/swagger");
const baseUrl = require("./server/helper/config/baseurlConfig");

const app = express();

app.use(bodyParser.json());
app.use("/", todoRoutes); // App Main Routes

app.get("/", (req, res) => {
  res.send("Hello World!, This is Pooja.");
});

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((err, req, res, next) => {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ error: err.message, data: err.data });
});

const port = baseUrl.handleGetApiBaseURL();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
