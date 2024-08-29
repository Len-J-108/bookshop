import mongoose, { Schema, Model } from "mongoose";

interface IDiscount {
  isDiscounted: boolean;
  amount: number;
}

interface IBooks {
  title: string;
  publisher: string;
  inStock: boolean;
  stockAmount: number;
  tags: [string];
  brand: string;
  artNum: number;
  isbn: string;
  deliveryTime: number;
  pageNum: number;
  price: number;
  discount: IDiscount;
  images: [string];
  rating: number;
}

type BookModel = Model<IBooks>;

const rndm = (num: number): number => {
  const res: number = Math.floor(Math.random() * (num - 0 + 1) + 0);
  return res;
};

const discountSchema = new Schema<IDiscount>({
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

const booksSchema = new Schema<IBooks, BookModel>({
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
});

const Book: BookModel = mongoose.model<IBooks, BookModel>("Book", booksSchema);

export default Book;
