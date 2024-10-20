import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('Database is Connected Wow')
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/universal-converter`);
};

export default connectDB;
