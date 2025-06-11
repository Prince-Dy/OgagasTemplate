import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  courseTitle: String,
  tier: String,
  price: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
