const mongoose=require('mongoose');

const booksEntity=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    edition:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('books', booksEntity);