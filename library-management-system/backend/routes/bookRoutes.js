const express = require('express');
const { addBook, getBooks } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/books', authMiddleware, addBook);
router.get('/books', getBooks);

module.exports = router;