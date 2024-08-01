import { Twit } from "../models/twiteSchema.js";
import { User } from "../models/userSchema.js";

// tweet ctreat
export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "Fields are required.",
        success: false,
      });
    }
    await Twit.create({
      description,
      userId: id,
    });
    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//  tweet deted

export const deleteTwit = async (req, res) => {
  try {
    const { id } = req.params;
    await Twit.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successefully",
      success: true,
    });
  } catch (error) {
    console.log("Usre deleteTwit.... ", error);
  }
};

//  tweet like

export const likeDislike = async (req, res) => {
  try {
    const logingUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Twit.findById(tweetId);
    if (tweet.like.includes(logingUserId)) {
      // dislike
      await Twit.findByIdAndUpdate(tweetId, { $pull: { like: logingUserId } });
      return res.status(200).json({
        message: "User disliked your tweet.",
      });
    } else {
      // like
      await Twit.findByIdAndUpdate(tweetId, {
        $push: { like: logingUserId },
      });
      return res.status(200).json({
        message: "User liked your tweet.",
      });
    }
  } catch (error) {
    console.log("error likeDislike.... ", error);
  }
};

// tweet getAllTweets

export const getAllTweets = async (req, res) => {
  // loggedInUser ka tweet + following user tweet
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Twit.find({ userId: id });
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Twit.find({ userId: otherUsersId });
      })
    );
    return res.status(200).json({
      tweets: loggedInUserTweets.concat(...followingUserTweet),
    });
  } catch (error) {
    console.log("error he bhai getAllTweets se ...", error);
  }
};

//  getFollowingTweets

export const getFollowingTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );
    return res.status(200).json({
      tweets: [].concat(...followingUserTweet),
    });
  } catch (error) {
    console.log("error he bhai getFollowingTweets se ...", error);
  }
};
