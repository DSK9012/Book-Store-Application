const express = require('express');
const router = express.Router();
const multer = require('multer');
const booksController = require('./booksController');
const upload = multer();

// GET all books
router.get('/fetchbooks', (req, res) => {
  try {
    booksController.fetchBooks(
      (books) => res.status(200).json(books),
      (error) => res.status(404).json(error)
    );
  } catch (error) {
    return res.status(500).json('Internal server error');
  }
});

// GET book details
router.get('/fetchbookdetails/:bookId', (req, res) => {
  try {
    booksController.fetchBookDetails(
      req.params.bookId,
      (bookDetails) => res.status(200).json(bookDetails),
      (error) => res.status(404).json(error)
    );
  } catch (error) {
    return res.status(500).json('Internal server error');
  }
});

// POST book
router.post('/insertbook', upload.fields([{ name: 'bookCover' }, { name: 'bookFile' }]), (req, res) => {
  console.log(req.files);
  try {
    // booksController.insertBook(
    //   req.body,
    //   (resMsg, insertedBook) => res.status(200).json(resMsg, insertedBook),
    //   (error) => res.status(400).json(error)
    // );
  } catch (error) {
    if (error instanceof multer.MulterError) {
      return res.status(500).json('Unable to process uploaded files.');
    }
    return res.status(500).json('Internal server error');
  }
});

// PUT book details
router.put('/updatebook', (req, res) => {
  try {
    booksController.updateBook(
      req.body,
      (books) => res.status(200).json(books),
      (error) => res.status(400).json(error)
    );
  } catch (error) {
    return res.status(500).json('Internal server error');
  }
});

// DELETE book
router.delete('/deletebook', (req, res) => {
  try {
    booksController.deleteBook(
      req.body,
      (books) => res.status(200).json(books),
      (error) => res.status(404).json(error)
    );
  } catch (error) {
    return res.status(500).json('Internal server error');
  }
});

module.exports = router;
