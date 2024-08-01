import { User } from "../models/userSchema.js";

import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";

//  user Register
export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    //  user Validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All field are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already axist.",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(
      "UserConroller Se Error he bhai Register nahi ho pa raha he user",
      error
    );
  }
};

//  user Login

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All field are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    //  bcryptjs is a laybrary its give Compare method,its help to compare exiting password and user login time Puting password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorect email or password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign({ tokenData }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
      });
  } catch (error) {
    console.log(
      "userController se error he user Login nahi huaa bhai....",
      error
    );
  }
};

//  user LogOut

export const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "user logOut successfully.",
    success: true,
  });
};

//  user book mark

export const BookMark = async (req, res) => {
  try {
    const logingUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(logingUserId);
    if (user.bookMarks.includes(tweetId)) {
      // remove bookMark
      await User.findByIdAndUpdate(logingUserId, {
        $pull: { bookMarks: tweetId },
      });
      return res.status(200).json({
        message: "Removed from bookMarks",
      });
    } else {
      // add bookMark
      await User.findByIdAndUpdate(logingUserId, {
        $push: { bookMarks: tweetId },
      });
      return res.status(200).json({
        message: "Save to bookMarks",
      });
    }
  } catch (error) {
    console.log("UserController se BookMark se bhai error he...", error);
  }
};
