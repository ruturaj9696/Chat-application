import mongoose from "mongoose";

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected !");
  } catch (error) {
    console.log("Error in connecting mongodb !" + error);
  }
};

export default mongoConnection;
