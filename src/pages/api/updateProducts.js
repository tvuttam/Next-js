import Product from "../../models/product";
import connectDb from "../../middlewear/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log("req===>", req.body);
    for (let i = 0; i < req.body.length; i++) {
      const p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
      await p.save();
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "this is not allowed" });
  }
  //   res.status(200).json({ products });
};
export default connectDb(handler);
