import express from "express";
import cors from "cors";
import "dotenv/config";
import livekitRoutes from "./routes/livekitRoutes.js";
const app = express();

app.use(cors());
app.use("/livekit", livekitRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});
// Specify the port to listen on
const port = process.env.PORT || 8081; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
