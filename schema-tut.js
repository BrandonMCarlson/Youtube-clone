// I -- import mongoose
const mongoose = require("mongoose");

// C -- code out the SCHEMA and MODEL for COMMENT and REPLY
const replySchema = new mongoose.Schema({
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
});

const commentSchema = new mongoose.Schema({
    videoID:{type:String, required:true},
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: [{ type: replySchema }],
});

const Reply = mongoose.model("Reply", replySchema);
const Comment = mongoose.model("Comment", commentSchema);


// E -- export the MODEL so we can access these instructions elsewhere
module.exports.Comment = Comment;
module.exports.Reply = Reply;
module.exports.commentSchema=commentSchema;
module.exports.replySchema=replySchema;
