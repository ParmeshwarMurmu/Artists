const mongoose = require('mongoose')

const favouriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    

}, {
    versionKey: false,
    timestamps: true
})

const FavouriteModel = mongoose.model("favourite", favouriteSchema)

module.exports = {
    FavouriteModel
}