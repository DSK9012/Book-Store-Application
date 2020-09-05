const express=require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const chalk=require('chalk');
const morgan=require('morgan');
const app=express();

// allow cors
app.use(cors());

// http requets logger
app.use(morgan('dev')); 

//intializing express middleware
app.use(express.json({extended:false}));

// routes
app.use('/api/books', require('./serverRoutes/books/booksRouter'));

// database connection
const connectDB=async ()=>{
    try {
        const mongoPort='mongodb://localhost:27017/bookstore';
        await mongoose.connect(
            mongoPort, 
            {   useUnifiedTopology: true, 
                useNewUrlParser: true, 
                useCreateIndex: true 
            })
            .then(()=>console.log(chalk.bgGreen.bold(`DB connected to ${mongoPort}`)))
            .catch(error=>console.log(chalk.bgRed.bold(error.message)));
    } catch (error) {
        console.log(chalk.bgRed.bold(error.message));
        // terminate db connection process
        process.exit(1);
    }
}
connectDB();

// server connection
const serverPort=process.env.PORT || 5000;
app.listen(serverPort, ()=>console.log(chalk.bgGreen.bold(`Book store app listening at ${serverPort}`))); 