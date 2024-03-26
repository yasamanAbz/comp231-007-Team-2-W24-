// controllers/livekitController.js
import { generateToken } from "../config/livekit.js";

export const getToken = (req, res) => {
  const { room, identity } = req.query;

  if (!room || !identity) {
    return res.status(400).json({ error: "Room and identity are required" });
  }

  try {
    const token = generateToken(room, identity);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error generating token" });
  }
};
