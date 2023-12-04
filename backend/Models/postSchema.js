const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    image: String,
    title: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    userName: String

}, {
    versionKey: false,
    timestamps: true
})

const PostModel = mongoose.model("post", postSchema)

module.exports = {
    PostModel
}