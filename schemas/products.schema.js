<<<<<<< HEAD
import mongoose from 'mongoose';

const {Schema} = mongoose; 
const productSchema = new Schema({
=======
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
>>>>>>> b87adf129e9d687b27074fbfe92eca011834fa1b
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
<<<<<<< HEAD
        required: true,
        select: false
=======
        required: true
>>>>>>> b87adf129e9d687b27074fbfe92eca011834fa1b
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

<<<<<<< HEAD
const Products = mongoose.model("products", productSchema);
export default Products;
=======
module.exports = mongoose.model("products", productSchema);
>>>>>>> b87adf129e9d687b27074fbfe92eca011834fa1b
