const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    email: String,
    address: String,
    city: String,
    country: String,
    createdAt: String
})

module.exports = model('User', userSchema)
