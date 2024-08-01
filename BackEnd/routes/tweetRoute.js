import express from "express";

import {
  createTweet,
  deleteTwit,
  likeDislike,
} from "../controllers/twitController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
// router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTwit);
router.route("/like/:id").put(isAuthenticated, likeDislike);

export default router;
