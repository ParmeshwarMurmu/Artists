const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: String,
    state: String,
    city: String

}, {
    versionKey: false
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}