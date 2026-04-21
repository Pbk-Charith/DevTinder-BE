const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 4,
    },
    lastName: {
        type: String,
    },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
    password: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        default: 90,
    },
    gender: {
        type: String,
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender Data is not valid");
            }
        }
    },
    address: {
        type: String,
    },
    skills:{
        type: [String],
    }
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema);