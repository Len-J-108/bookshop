import express, { Request, Response } from "express";
import Book from "../models/books-model.js";

export const getAllBooks = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await Book.find();
    const mod = response.map((x: any) => x.title);
    res.status(200).json(mod);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

export const getAllBooksForList = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await Book.find();
    const mod = response.map((x: any) => x.title);
    for (let i of mod) console.log(i);
    res.status(200).json(mod);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
