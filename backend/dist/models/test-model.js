import { Schema, model } from "mongoose";
const testSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});
const Test = model("Test", testSchema);
export default Test;
