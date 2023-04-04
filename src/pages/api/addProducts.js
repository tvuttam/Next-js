import Product from "../../models/product";
import connectDb from "../../middlewear/mongoose";

const handler = async (req, res) => {
if(req.method == "POST"){
    console.log( "req===>",req.body)
    for (let i = 0; i < req.body.length; i++) {
      const p = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img,
        category: req.body[i].category,
        price: req.body[i].price,
        availableqty: req.body[i].availableqty,
      })
      await p.save()
    }
    res.status(200).json({success : "success" });

}else{
    res.status(400).json({error:"this is not allowed" });
}
//   res.status(200).json({ products });
};
export default connectDb(handler);
