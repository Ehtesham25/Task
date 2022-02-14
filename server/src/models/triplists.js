import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    selectedFile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const triplists = mongoose.model("triplists", postSchema);
export default triplists;
