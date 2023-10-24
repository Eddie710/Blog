let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let blogSchema = require("../Models/Blog");
let postSchema = require("../Models/Post");

router.route("/create-post").post(async (req, res, next) => {
  await blogSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/post-page").post(async (req, res, next) => {
  await postSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});


module.exports = router;