import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongoose.js";

// App Config
const PORT = process.env.PORT || 4000;

const app = express();
await connectDB();

// Middleware Intialization
app.use(express.json());
app.use(cors());
// App Routes
app.get("/", (req, res) => res.send("API is Wrking"));

app.listen(PORT, () => console.log("Server is  on Port " + PORT));

