import express from "express";
import {
  BookMark,
  Follow,
  GetOtherUser,
  Login,
  Logout,
  Register,
  Unfollow,
  UserProfile,
} from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated, BookMark);
router.route("/profile/:id").get(isAuthenticated, UserProfile);
router.route("/otherUser/:id").get(isAuthenticated, GetOtherUser);
router.route("/follow/:id").post(isAuthenticated, Follow);
router.route("/unfollow/:id").post(isAuthenticated, Unfollow);

export default router;
