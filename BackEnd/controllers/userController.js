import { User } from "../models/userSchema.js";

import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";

//  user Register
export const Register = async (req, res) => {
  try {
    const { name, uName, email, password } = req.body;

    //  user Validation
    if (!name || !uName || !email || !password) {
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
      uName,
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
  return res.status(500).json({
    message: "Internal server error",
    success: false,
  });
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

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        user,
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

//  user ProfileGetProfile

export const UserProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log("Usre ProFile se error...", error);
  }
};

// get otherUser List

export const GetOtherUser = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );
    if (!otherUsers) {
      return res.status(401).json({
        message: "Currently do not have any users.",
      });
    }
    return res.status(200).json({
      otherUsers,
    });
  } catch (error) {
    console.log("error getOtherUser se he bhai.... ", error);
  }
};

// user follow
export const Follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggedInUserId); //patel
    const user = await User.findById(userId); //keshav
    if (!user.followers.includes(loggedInUserId)) {
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User already followed to ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} just follow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log("error he bhai follow se .....", error);
  }
};

//  user unfollow
export const Unfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggedInUserId); //patel
    const user = await User.findById(userId); //keshav
    if (loggedInUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User has not followed yet`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} unfollow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log("error unfollow se he .....", error);
  }
};
