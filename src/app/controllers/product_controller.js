const Product = require('../models/product');

class ProductController {
  async index(req, res) {
    try{
      let data = await Product.find({});
      return res.json(data);
    } catch(err){
      err
    }
  }

  async show(req, res){
    try{
      let data = await Product.find({_id: req.params.id});
      return res.json(data);
    } catch(err){
      err
    }
  }

  async create(req, res) {
    try{
      let data = await Product.create(req.body);
      return res.json(data);
    } catch(err){
      err
    }
  }

  async update(req, res) {
    try{
      let data = await Product.updateOne({ _id: req.params.id }, {
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        weight: req.body.weight,
        size:req.body.size,
        color: req.body.color
       });
      return res.json(data);
    } catch(err){
      err
    }
  }

  async destroy(req, res) {
    try{
      let data = await Product.deleteOne({ _id: req.params.id });
      return res.json(data);
    } catch(err){
      err
    }
  }
}

module.exports = new ProductController();
