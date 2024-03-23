import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from  "cors";
import authroute from "./Routes/auth.route.js";
import messagesroutes from "./Routes/message.route.js";
import userRoutes from "./Routes/users.route.js";

import mongoConnection from "./DB/mongoConnection.js";

const app = express();
app.use(cors())
//Inseted of using the cors here we can config the vite.config.js file to resolve this cors error but it is bit easy way that configuration is also done refer that also in vite.config.js file
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser()); //To parse the incoming cookies from req.cookies and to make them available in req.

// Test API
// app.get( "/", (req, res) => {
//     const message = `Hello World! I'am a NodeJS API`;
//     console.log("Home Page Accessed");
//     res.send({ status: "success", message });
// });

app.use("/api/auth", authroute);
app.use("/api/messages", messagesroutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  mongoConnection();
  console.log(`Server is running on port ${PORT}`);
});
