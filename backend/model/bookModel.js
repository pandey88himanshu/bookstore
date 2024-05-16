const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookname:{type: String},
    description:{type: String},
    author:{type: String},
    image:{type: String},
    price:{type: Number},
})

module.exports = new mongoose.model("books",bookSchema)