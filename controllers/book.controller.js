const Book = require("../models/book.model");

exports.getBooks = async (req, res) => res.json(await Book.find());
exports.getBookById = async (req, res) => res.json(await Book.findById(req.params.id));
exports.createBook = async (req, res) => res.status(201).json(await Book.create(req.body));
exports.updateBook = async (req, res) => res.json(await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};