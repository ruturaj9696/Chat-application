import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requred: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requred: true,
    },
    message: {
      type: String,
      requred: true,
    },
  },
  { timestamps: true }
);

const message = mongoose.Schema("Message", messageSchema);
export default message;
