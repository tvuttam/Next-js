const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true },
    availableqty: { type: Number, require: true },
  },
  { timestamps: true }
);
mongoose.models = {}
export default mongoose.model("product", productSchema);
