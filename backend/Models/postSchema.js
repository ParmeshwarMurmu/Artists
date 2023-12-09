const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    // image: [{
    //     url: String,
    //     title: String
    // }],
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: String,
    likes: Number,
    isLiked: Boolean,
    userName: String,

}, {
    versionKey: false,
    timestamps: true
})

const PostModel = mongoose.model("post", postSchema)

module.exports = {
    PostModel
}