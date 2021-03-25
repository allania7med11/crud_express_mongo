const { productModel } = require("../models");
const fields = ["name", "price", "description"];
module.exports = {
  create: async (req, res) => {
    let obj = fields.reduce((acc, elm) => {
      acc[elm] = req.body[elm];
    }, {});
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
      let data = await productModel.find().sort({ _id: -1 }).exec();
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  update: async (req, res) => {
    let id = req.params.id;
    let obj = fields.reduce((acc, elm) => {
      acc[elm] = req.body[elm];
    }, {});
    try {
      let data = await productModel.findOneAndUpdate({ _id: id }, obj, {
        new: true,
      });
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  delete: async (req, res) => {
    let id = req.params.id;
    try {
      let data = await productModel.findByIdAndRemove({ _id: id });
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
