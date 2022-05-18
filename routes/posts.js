const express = require("express");

const router = express.Router();
const Post = require("../models/Post");

//Get All Posts
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.post("/", (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });

//   post
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({
//         message: err,
//       });
//     });
// });

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
//Update Post

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json(err);
  }
});

//Remove Data
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
