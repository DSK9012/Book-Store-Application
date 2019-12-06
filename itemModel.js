const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const itemSchema=new Schema({
    itemname:String,
    type:String,
    image:String,
    availabletime:String,
    availablefor:String,
    price:Number 
});


module.exports=mongoose.model("fooditems",itemSchema);
