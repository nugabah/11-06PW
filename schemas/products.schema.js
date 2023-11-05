const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content : {
        type: String,
        required: true,
        unique: true
    },
    author : {
        type: String
    },
    password : {
        type: Number
    }
});

module.exports = mongoose.model("products", productSchema);