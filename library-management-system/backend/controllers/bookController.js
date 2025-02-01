const Book = require('../models/Book');

const addBook = async (req, res) => {
  const { title, author, isbn } = req.body;
  try {
    const book = new Book({ title, author, isbn });
    await book.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addBook, getBooks };