// index.js

let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
const BlogRoute = require("./routes/blog.routes.js");

  mongoose
  .connect("mongodb+srv://eddie05:westmec@first-cluster.sazscse.mongodb.net/Blog")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });


  const app = express();
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(cors());
  app.use("/users", BlogRoute);
  app.use("/posts", BlogRoute);

  const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
