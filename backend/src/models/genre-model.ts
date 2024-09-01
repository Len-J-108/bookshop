import { Schema, Model, model } from "mongoose";

interface IGenre {
  genre: string;
}

type GenreModel = Model<IGenre>;

const genreSchema = new Schema<IGenre, GenreModel>({
  genre: {
    type: String,
    required: true,
    unique: true,
  },
});

const Genre: GenreModel = model<IGenre, GenreModel>("Genre", genreSchema);
export default Genre;
