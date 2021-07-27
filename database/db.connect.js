const mongoose = require('mongoose');
require('dotenv').config();


const initializeDB = async () =>{
    try{
        const connect = await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@neog-cluster.tdvpj.mongodb.net/cryptoquiz?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("Connected to database")
    }catch(err){
        console.log('Error in connecting to DB:',err)
    }
}

module.exports = {initializeDB}