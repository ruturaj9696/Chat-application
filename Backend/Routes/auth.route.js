import express  from "express";
import { login, logout, signup } from "../Controllers/auth.controller.js";
const router = express.Router();


// router.get("/login", (req, res) => {
//   res.send("login page route");
// });

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


export default router;
