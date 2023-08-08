import mongoose, { Schema } from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      validate: {
        validator: validator.isMobilePhone,
        message: "Invalid phone number",
      },
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


export default mongoose.model("Users", userSchema);
