import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  head: {
    type: String,
    required: true,
  },
  utubeUrl: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
contentSchema.index({});
export default mongoose.models.Content ||
  mongoose.model("Content", contentSchema);
