import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import express from "express";
import livekitRoutes from "./routes/livekitRoutes.js";
dotenv.config();

const app = express();
const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use("/livekit", livekitRoutes);

// Other server setup and routes...

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
