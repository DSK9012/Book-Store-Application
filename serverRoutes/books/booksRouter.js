const express = require('express');
const router = express.Router();
const booksController = require('./booksController');

// GET all books
router.get('/fetchbooks', (req, res) => {
  try {
    booksController.fetchBooks(
      (books) => {
        return res.status(200).json(books);
      },
      (error) => {
        return res.status(404).json(error);
      }
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
      (bookDetails) => {
        return res.status(200).json(bookDetails);
      },
      (error) => {
        return res.status(404).json(error);
      }
    );
  } catch (error) {
    return res.status(500).json('Internal server error');
  }
});

// POST book
router.post('/insertbook', (req, res) => {
  try {
    booksController.insertBook(
      req.body,
      (resMsg, insertedBook) => {
        return res.status(200).json(resMsg, insertedBook);
      },
      (error) => {
        return res.status(400).json(error);
      }
    );
  } catch (error) {
    return res.status(500).json('Internal server error');
  }
});

// PUT book details
router.put('/updatebook', (req, res) => {
  try {
    booksController.updateBook(
      req.body,
      (books) => {
        return res.status(200).json(books);
      },
      (error) => {
        return res.status(400).json(error);
      }
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
      (books) => {
        return res.status(200).json(books);
      },
      (error) => {
        return res.status(404).json(error);
      }
    );
  } catch (error) {
    return res.status(500).json('Internal server error');
  }
});

module.exports = router;
