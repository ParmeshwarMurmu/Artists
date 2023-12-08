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
    userName: String

}, {
    versionKey: false,
    timestamps: true
})

const PostModel = mongoose.model("art", postSchema)

module.exports = {
    PostModel
}