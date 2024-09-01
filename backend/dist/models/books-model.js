import { Schema, model } from "mongoose";
const rndm = (num) => {
    const res = Math.floor(Math.random() * (num - 0 + 1) + 0);
    return res;
};
const discountSchema = new Schema({
    isDiscounted: {
        type: Boolean,
        required: true,
        default: false,
    },
    amount: {
        type: Number,
        min: 0,
        max: 50,
        default: 0,
    },
});
const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
    },
    stockAmount: {
        type: Number,
        required: true,
        default: 1000,
        min: 0,
        max: 1000,
    },
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    artNum: {
        type: Number,
        required: true,
        min: 1,
        max: 100000,
    },
    isbn: {
        type: String,
        required: true,
    },
    deliveryTime: {
        type: Number,
        default: 5,
        min: 3,
        max: 100,
        required: false,
    },
    pageNum: {
        type: Number,
        min: 20,
        max: 10000,
        required: true,
    },
    price: {
        type: Number,
        min: 5,
        max: 10000,
        required: true,
    },
    discount: discountSchema,
    images: [String],
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: rndm(5),
    },
    summary: {
        type: String,
        minlength: 200,
        maxLength: 10000,
        required: true,
    },
});
const Book = model("Book", booksSchema);
export default Book;
