import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
