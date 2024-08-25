import mongoose, { Schema } from "mongoose";

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

const booksModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
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
  tags: {
    type: [String],
    enum: {
      values: [
        "thriller",
        "romance",
        "fantasy",
        "novel",
        "peotry",
        "sci-fi",
        "history",
        "non-fiction",
        "finction",
        "politics",
        "philosophy",
        "hobbies",
      ],
    },
  },
  brand: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "book's name should be at least 3 characters long!"],
  },
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
    min: 100,
    max: 10000,
    required: true,
  },
  discount: discountSchema,
  images: [String],
});

const Book = mongoose.model("Book", booksModel);

export default Book;
