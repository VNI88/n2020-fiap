swagger_info = require ('./open_api/product.swagger.ts');

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Docs',
    description: 'Learn how to use our n2020 project',
    termsOfService: ''
  },
  tags: [
    {
      name: 'Products'
    }
  ],
  paths:{
    '/products': {
      'get': swagger_info.index
    },
    '/product/new': {
      'post': swagger_info.create
    },
    '/product/:id': {
      'get': swagger_info.show,
      'patch': swagger_info.update,
      'delete': swagger_info.destroy
    },
  }
}

module.exports = swaggerDocument;
