const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comment: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    post :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    

}, {
    versionKey: false,
    timestamps: true
})

const CommentModel = mongoose.model("comment", commentSchema)

module.exports = {
    CommentModel
}