// blog.routes.js

let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let blogSchema = require("../Models/Blog");
let postSchema = require("../Models/Post");
const {Hash,unHash} = require('../Hash')
router.route("/create-user").post(async (req, res, next) => {
  console.log(req.body)
 
  await blogSchema
    .create({...req.body,password:await Hash(req.body.password)})
    .then((result) => {
      console.log(result)
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

router.route("/blogs").get(async (req, res, next) => {
  await postSchema
    .find()
    .then((result) => {
      res.json({
        data: result.reverse(),
        message: "Data successfully got!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/login").get(async (req, res, next) => {
  console.log(req.body)
  await postSchema
    .find()
    .then((result) => {
      res.json({
        data: result.reverse(),
        message: "Data successfully got!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/browse/:id").get(async (req, res) => {
  let postID  = req.params.id
  
  await postSchema
    .find({
      _id : postID
    })
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully got!",
        status: 200,
      });
    })
    .catch((err) => {
      console.error(err)
    });
});



module.exports = router;