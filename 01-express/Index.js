const express = require("express");
const bodyParser = require('body-parser')
const projectRoutes = require("./server/routes/project.routes");
const app = express();
const port = 8000;


app.use(bodyParser.json())
app.use("/", projectRoutes); // App Main Routes

app.get("/", (req, res) => {
  res.send("Hello World!, This is Pooja.");
});

app.use((err, req, res, next) => {
  res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ error: err.message, data: err.data });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
