const { Comment, validateComment } = require("../Models/Comment");
const express = require("express");
const router = express.Router();

// All endpoints and route handlers go here
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.send(comments);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment)
      return res
        .status(400)
        .send(`The comment with id "${req.params.id}" does not exist.`);

    return res.send(comment);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const { error } = validateComment(req.body);

    if (error) return res.status(400).send(error);
    // Need to validate body before continuing

    const comment = new Comment({
      videoID: req.body.videoID,
      text: req.body.text,
      likes: 0,
      dislikes: 0,
      replies: [],
    });
    await comment.save();

    return res.send(comment);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndRemove(req.params.id);
    if (!comment)
      return res
        .status(400)
        .send(`The comment with id "${req.params.id}" does not exist.`);

    return res.send(comment);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

router.put("./:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        videoID: req.body.videoID,
        text: req.body.text,
        likes: 0,
        dislikes: 0,
        replies: [],
      },
      { new: true }
    );
    if (!comment)
      return res
        .status(400)
        .send(`The comment with id "${req.params.id}" does not exist.`);
    await comment.save();
    return res.send(comment);
  } catch (err) {
    return res.send(500).send("Internal Server Error: ${err}");
  }
});

module.exports = router;
