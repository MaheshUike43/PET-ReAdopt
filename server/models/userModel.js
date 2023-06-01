import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:validator.isEmail
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 20
    },
    phone_number: {
        type: String,
        required: true,
        min: 10,
        max: 10,
        validate:validator.isMobilePhone
    },
    address: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

export default mongoose.model('Users', userSchema)