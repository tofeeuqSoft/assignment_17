const Product = require("../Models/Product");

exports.CreateProduct = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await Product.create(reqBody);
    if (result) {
      res.status(201).json({ status: "success", data: result });
    } else {
      res.status(401).json({ status: "fail", data: "Product not create ." });
    }
  } catch (e) {
    res.status(400).json({ status: "fail", data: e });
  }
};
