import mongoose from "mongoose";

// fullName, username, password, confirmPassword, gender

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
  // Timestamp  for when the account was created and update
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
