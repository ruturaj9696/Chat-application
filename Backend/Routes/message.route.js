import express from "express";
import { sendMessage } from "../Controllers/message.controller.js";
import protectroute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protectroute, sendMessage);

export default router;
