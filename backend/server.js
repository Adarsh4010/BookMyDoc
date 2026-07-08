import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Database & Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 BookMyDoc Backend is Running...");
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server Started on port ${port}`);
});