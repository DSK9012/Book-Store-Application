const chalk = require('chalk');
const booksEntity = require('./booksEntity');

const booksController = {
  fetchBooks: async (successCB, errorCB) => {
    try {
      const result = await booksEntity.find({});
      console.log(chalk.green.bold(result));
      return successCB(result);
    } catch (error) {
      console.log(error);
      return errorCB(error.message);
    }
  },
  fetchBookDetails: async (bookId, successCB, errorCB) => {
    try {
      const result = await booksEntity.findOne({ _id: bookId });
      console.log(chalk.green.bold(result));
      return successCB(result);
    } catch (error) {
      console.log(error);
      return errorCB(error.message);
    }
  },
  insertBook: async (bookData, successCB, errorCB) => {
    try {
      const addBook = new booksEntity(bookData);
      console.log(chalk.green.bold(addBook));
      const res = await addBook.save();
      console.log(chalk.green.bold(res));
      return successCB('Book added successfully');
    } catch (error) {
      console.log(error);
      return errorCB(error.message);
    }
  },
  updateBook: async (bookData, successCB, errorCB) => {
    try {
      const update = await booksEntity.updateOne({ _id: bookData._id }, { $set: bookData });
      console.log(chalk.green.bold(update));
      if (update.n) {
        return successCB('Book updated successfully');
      } else {
        return errorCB('Book not found');
      }
    } catch (error) {
      console.log(error);
      return errorCB(error.message);
    }
  },
  deleteBook: async (bookId, successCB, errorCB) => {
    try {
      const deleted = await booksEntity.deleteOne({ _id: bookId });
      console.log(chalk.green.bold(deleted));
      if (deleted.n) {
        return successCB('Book deleted successfully');
      } else {
        return errorCB('Book not found');
      }
    } catch (error) {
      console.log(error);
      return errorCB(error.message);
    }
  },
};

module.exports = booksController;
