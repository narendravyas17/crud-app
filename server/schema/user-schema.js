import mongoose from "mongoose";

//import autoIncrement from 'mongoose-auto-increment'

const userSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true,
        id: Number
    },
    username: {
        type: String,
        required: true,
        id: Number
    },
    email: {
        type: String,
        required: true,
        id: Number
    },
    phone: {
        type: String,
        required: true,
    }

    // name: String,
    // username: String,
    // email: String,
    // phone: String,
    
    // autoIncrementField: {
    //     type: Number,
    //     unique: true,
    // },

})

//autoIncrement.initialize(mongoose.connection);
 //userSchema.plugin(autoIncrement.plugin, 'user');

//export default mongoose.model("user", userSchema);


// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

 const user = mongoose.model('user', userSchema);

export  default user;