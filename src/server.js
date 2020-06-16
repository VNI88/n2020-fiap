const express = require('express');
const db = require('./db/config');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const  swaggerDocument = require('./swagger.ts');

class App {
  constructor() {
    this.express = express();
    console.log(this.database)
    this.database();
    this.middleware();
    this.routes();
    this.docs();

    this.express.listen(3001, () =>
      console.log('API running in PORT 3001')
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middleware() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }

  docs() {
    this.express.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

module.exports = new App().express;
