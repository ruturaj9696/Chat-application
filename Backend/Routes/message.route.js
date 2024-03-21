import express from "express";
import { getMessage, sendMessage } from "../Controllers/message.controller.js";
import protectroute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protectroute, sendMessage);
router.get("/:id", protectroute, getMessage);

export default router;
