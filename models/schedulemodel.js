import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  ind: String,
  schedule: {
    type: [
      {
        content: String,
        span: String,
      },
    ],
    default: undefined,
  },
});

export default mongoose.models.Schedule ||
  mongoose.model("Schedule", scheduleSchema);
