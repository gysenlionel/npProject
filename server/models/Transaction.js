const { model, Schema } = require('mongoose')


const eventSchema = new Schema({
    concertId: String,
    name: String,
    qtyMin: Number,
    qtyMax: Number,
    priceMin: Number,
    priceMax: Number,
    date: String,
    address: String
})

const transactionSchema = new Schema({
    idUser: String,
    price: Number,
    createdAt: String,
    events: [eventSchema],
})

module.exports = model('Transaction', transactionSchema)    