const mongoose = require("mongoose")

const kitchenSchema = new mongoose.Schema({
    id : Number,
    name : String,
    amount : Number,
    ratings : Number
})

const kitchenModel = mongoose.model("kitchenData",kitchenSchema)

module.exports = kitchenModel