import mongoose from "mongoose";

const twitSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bookMarks: {
      type: [],
      default: [],
    },
  },
  { timestamps: true }
);

export const Twit = mongoose.model("Twit", twitSchema);
