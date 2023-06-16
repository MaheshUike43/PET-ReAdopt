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
    tokens: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    this.tokens.push({ token });
    await this.save();
    return token;
  } catch (error) {
    console.error(error);
    throw new Error('Error generating authentication token');
  }
};

export default mongoose.model("Users", userSchema);
