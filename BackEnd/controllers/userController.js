import { User } from "../models/userSchema.js";

import bcryptjs from "bcryptjs";

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
    console.log("UserConroller Se Error he bhai", error);
  }
};
