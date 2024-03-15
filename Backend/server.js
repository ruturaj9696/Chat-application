import express from "express";
import dotenv from "dotenv";

import authroute from "./Routes/auth.route.js";
import messagesroutes from "./Routes/message.route.js";
import mongoConnection from "./DB/mongoConnection.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use("/api/auth", authroute);
app.use("/api/messages", messagesroutes);

app.listen(PORT, () => {
  mongoConnection();
  console.log(`Server is running on port ${PORT}`);
});
