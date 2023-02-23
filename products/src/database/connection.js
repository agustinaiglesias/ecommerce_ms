//Load mongoose
const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        const con= await mongoose.connect('mongodb+srv://miglesias:cuzcheckmate12@cluster0.jk3xfip.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connected to MongoDB')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;
