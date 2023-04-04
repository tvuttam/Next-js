const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: String, require: true },
    product: [
      {
        producId: { type: String },
        qty: { type: Number, default: 1 },
      },
    ],
    address: { type: String, require: true },
    amount: { type: Number, require: true },
    status: { type: string, default: "panding", require: true },
  },
  { timestamps: true }
);
mongoose.models = {}

export default mongoose.model("order", orderSchema);
