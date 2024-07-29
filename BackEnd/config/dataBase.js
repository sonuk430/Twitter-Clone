import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env",
});

const dataBaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("cnnected to MongoDB");
    })
    .catch((error) => {
      console.log("Error AA Gya Bhai", error);
    });
};

export default dataBaseConnection;
