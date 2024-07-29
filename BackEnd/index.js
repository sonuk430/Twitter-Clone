import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./config/dataBase.js";
import cookieParser from "cookie-parser";
import userRoute from "../BackEnd/routes/userRoute.js";

dotenv.config({
  path: ".env",
});

//  database Connection
dataBaseConnection();

const app = express();

// middlewares

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cookieParser());

//  API Created
app.use("/api/v1/user", userRoute);

// registerAPI: http://localhost:8080/api/v1/user/register

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});

//  Password: twiterClone
