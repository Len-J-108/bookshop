import { Schema, model } from "mongoose";
const genreSchema = new Schema({
    genre: {
        type: String,
        required: true,
        unique: true,
    },
});
const Genre = model("Genre", genreSchema);
export default Genre;
