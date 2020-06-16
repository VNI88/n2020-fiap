const express = require('express');
const routes = express.Router();
const ProductController = require('./app/controllers/product_controller.js');

routes.get('/products', ProductController.index);

routes.get('/product/:id', ProductController.show);

routes.post('/product/new', ProductController.create);

routes.patch('/product/:id', ProductController.update);

routes.delete('/product/:id', ProductController.destroy);

module.exports = routes;
