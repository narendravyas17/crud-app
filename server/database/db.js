import mongoose  from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.tg4b1pv.mongodb.net/crud?retryWrites=true&w=majority`;

    try {
       await  mongoose.connect(URL, { useUnifiedTopology:true , useNewUrlParser:true});
       console.log('Database conected successfully');
        
    } catch (error) {
        console.log('Error while connecting with the database', error);
        
    }

}

export default Connection;


// const MongoCLient = require('mongodb').MongoClient;

// const url = `mongodb+srv://${username}:${password}@cluster0.tg4b1pv.mongodb.net/crud?retryWrites=true&w=majority`;

