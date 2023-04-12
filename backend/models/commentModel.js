const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
   body: { type: String },
   user: { type: String, required: true },
}, { timestamps: true })

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment
