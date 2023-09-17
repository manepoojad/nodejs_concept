// nodejs inbuild library--------------------------------------------

// nodejs external library---------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// swagger -----------------------------------------------------------
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./src/documentation/swagger");

// import from other files----------------------------------------------
const baseUrl = require("./src/helper/config/baseURLconfig");
const routes = require("./src/routes/routes");
// define constants -----------------------------------------------------
const app = express();

app.use(bodyParser.json()); // application/json

app.use(cors());
// set static folder ==> public folder---------------------------------------

// Route --------------------------------------------------------------------------
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/test", function (req, res, next) {
  res.send(
    `<html><body><h1><em>nodejs_express_fs todo testing.</em></h1></body></html>`
  );
});
app.use("/", routes); // App Main Routes

app.use((req, res, next) => {
  const err = new Error("Url not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ error: err.message, data: err.data });
});

// API URL -------------------------------------------------------------------
app.listen(baseUrl.handleGetApiBaseURL(), () => {
  console.log(`Server is listening on port '${baseUrl.handleGetApiBaseURL()}'`);
});
