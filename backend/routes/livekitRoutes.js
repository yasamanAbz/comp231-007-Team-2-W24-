// routes/livekitRoutes.js
import express from "express";
import { getToken } from "../controllers/livekitController.js";

const router = express.Router();

router.get("/token", getToken);

export default router;
