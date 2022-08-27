require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
const connectToMongoDB = require('./DBConnections');
const serverConfig = require('./serverConfig');

// Allow Cors
app.use(cors());

// Http Requests Logger
app.use(morgan('dev'));

// Intializing Express Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/books', require('./routes/books/booksRouter'));

// Database Connection
connectToMongoDB();

// Server Connection
const { serverPort } = serverConfig;
app.listen(serverPort, () => console.log(chalk.bgGreen.bold(`Book store app listening at ${serverPort}`)));

// Production Mode
if (process.env.NODE_ENV.toLowerCase() === 'production') {
  // Serve Any Static Files
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
