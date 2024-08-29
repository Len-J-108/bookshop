import express, { Request, Response } from "express";
import Book from "../models/booksModel.js";

export const getAllBooks = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await Book.find().select("title");
    const mod = response.map((x: any) => x.title);
    res.status(200).json(mod);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
