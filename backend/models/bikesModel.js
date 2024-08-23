import mongoose, { Schema } from "mongoose";

const sizeSchema = mongoose.Schema({
  size: {
    type: String,
    required: true,
    enum: {
      values: ["s", "m", "l", "xl", "2xl"],
    },
  },
  inStock: {
    typy: Boolean,
    required: true,
    default: true,
  },
  stockAmount: {
    type: number,
    required: true,
    default: 1000,
    min: 0,
    max: 1000,
  },
});

const discountSchema = new Schema({
  isDiscounted: {
    type: Boolean,
    required: true,
    default: false,
  },
  amount: {
    type: number,
    min: 0,
    max: 50,
    default: 0,
  },
});

const bikeModel = mongoose.Schema({
  model: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "bikes name should be at least 3 characters long!"],
  },
  brand: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "bikes name should be at least 3 characters long!"],
  },
  artNum: {
    type: Number,
    required: true,
    min: 1,
    max: 100000,
  },
  deliveryTime: {
    type: number,
    default: 5,
    min: 3,
    max: 100,
    required: false,
  },
  style: {
    type: [String],
    enum: {
      values: [
        "electric",
        "mountain",
        "gravel",
        "race",
        "dirt",
        "commuter",
        "trekking",
        "city",
        "children",
      ],
    },
  },
  size: [sizeSchema],
  price: {
    type: Number,
    min: 100,
    max: 10000,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
    min: 1,
    max: 25,
  },
  discount: discountSchema,
  gears: {
    type: number,
    required: false,
    min: 1,
    max: 40,
  },
});

const Bike = mongoose.model("Bike", bikeModel);
export default Bike;
