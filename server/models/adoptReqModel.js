import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    pet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    request_date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('AdoptionRequests', requestSchema);
