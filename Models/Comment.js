// I -- import mongoose
const mongoose = require("mongoose");
const { replySchema } = require('./Reply');
const Joi = require('joi');

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
    const validator = Joi.object({
       videoID: Joi.string().required(),
       text: Joi.string().min(4).max(255).required(),
       likes: Joi.number().default(0),
       dislikes: Joi.number().default(0),
    })
    return validator.validate(comment)
}


// E -- export the MODEL so we can access these instructions elsewhere
module.exports.Comment = Comment;
module.exports.commentSchema = commentSchema
module.exports.validateComment = validateComment
