import mongoose from 'mongoose';

const {Schema} = mongoose; 
const productSchema = new Schema({
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
        required: true,
        select: false
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

const Products = mongoose.model("products", productSchema);
export default Products;
