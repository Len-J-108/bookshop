import { Request, Response } from "express";
import Genre from "../models/genre-model.js";

export const getAllGenres = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await Genre.find();
    const allGenres = response.map((x) => x.genre);
    res.status(200).json({ allGenres });
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

export const addNewGenre = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const genre = req.body.genre;
    const item = await Genre.findOne({ genre });
    if (item) throw new Error("Genre already exists");

    const newGenre = new Genre({ genre });
    await newGenre.save();

    console.log(`Genre: ${genre} added to database.`);
    res.status(200).json(`Genre: ${genre} added to database.`);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
