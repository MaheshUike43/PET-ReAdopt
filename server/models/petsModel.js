import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    pet_type: {
        type: String,
        enum: ["Cat", "Dog", "Cow", "Bird", "Other"],
        required: true,
    },
    pet_name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Adopted", "Booked"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pets", petSchema);
