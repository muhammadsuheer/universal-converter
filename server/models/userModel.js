import mongoose, { mongo } from "mongoose";

const userScema = new mongoose.Schema({
    clerkID: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    creditBalance: { type: Number, default: 5 }
})

const userModel = mongoose.models.user || mongoose.model("user", userScema)

export default userModel;