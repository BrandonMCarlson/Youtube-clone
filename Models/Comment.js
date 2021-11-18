// I -- import mongoose
const mongoose = require("mongoose");
const { replySchema } = require('./Reply');

// C -- code out the SCHEMA and MODEL for COMMENT and REPLY

const commentSchema = new mongoose.Schema({
    videoID:{type:String, required:true},
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: [{ type: replySchema }],
});


const Comment = mongoose.model("Comment", commentSchema);

const validateComment = (comment) => {
    
}


// E -- export the MODEL so we can access these instructions elsewhere
module.exports.Comment = Comment;
module.exports.commentSchema = commentSchema
