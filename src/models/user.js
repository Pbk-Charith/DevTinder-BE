const mongoose = require('mongoose');
const validator = require('validator');     

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
            trim: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is not valid:" + value);
                }
            }
        },
    password: {
        type: String,
        required: true,
        validate(value){
                if(!validator.isStrongPassword(value)){
                    throw new Error("Password is not strong enough:" + value);
                }
            }
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