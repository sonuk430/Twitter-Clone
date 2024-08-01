import express from "express";

import {
  createTweet,
  deleteTwit,
  getAllTweets,
  getFollowingTweets,
  likeDislike,
} from "../controllers/twitController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
// router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTwit);
router.route("/like/:id").put(isAuthenticated, likeDislike);
router.route("/getAllTweets/:id").get(isAuthenticated, getAllTweets);
router.route("/FollowingTweets/:id").get(isAuthenticated, getFollowingTweets);

export default router;
