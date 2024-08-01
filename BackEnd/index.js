import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./config/dataBase.js";
import cookieParser from "cookie-parser";
import userRoute from "../BackEnd/routes/userRoute.js";
import tweetRoute from "../BackEnd/routes/tweetRoute.js";

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
app.use("/api/v1/tweet", tweetRoute);

// registerAPI: http://localhost:8080/api/v1/user/register
// LoginAPI: http://localhost:8080/api/v1/user/login
// LogOutAPI: http://localhost:8080/api/v1/user/logout

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});

//  Password: twiterClone
