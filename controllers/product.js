const { productModel } = require("../models");

module.exports = {
  create: async (req, res) => {
    let obj = req.body;
    try {
      let product = new productModel(obj);
      let data = await product.save();
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  read: async (req, res) => {
    try {
      let data = await productModel.find().exec();
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
