import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import livekitRoutes from "./routes/livekitRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();
app.use(express.json());

app.use(cors());
app.use("/livekit", livekitRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});
// Specify the port to listen on
const port = process.env.PORT || 8081; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));
