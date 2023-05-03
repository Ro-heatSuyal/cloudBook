const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://rohit:superduper@note1.jrzehtb.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, 
        console.log("Connected to Mongo Successfully")
    );
}

module.exports = connectToMongo;

