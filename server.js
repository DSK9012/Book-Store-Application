const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require(bodyParser);
const app=express();

const url = 'mongodb://localhost:27017/'

mongoose.connect(url, { useNewUrlParser: true });
 
app.listen(5000);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const Items=require("./routes/items"); 


app.use('/fooditem', Items);