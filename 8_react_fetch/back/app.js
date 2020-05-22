const express = require("express");
const jsend = require("jsend")

const routes = require('./routes')

const errorMiddleware = require('./middleware/error')

class App {
  constructor(port = 3001) {
    this._port = port;
    this.app = express();
  }

  run() {
    
    this.app.use(express.json())
    this.app.use(jsend.middleware)
    // this.app.use(authMiddleware)

    this.app.use('/api/v1/',routes)
    
    this.app.use(errorMiddleware)

    this.app.listen(this._port, function () {
      console.info("Сервер запущен");
    });
  }
}

if (!module.parent) {
  const app = new App();
  app.run();
}

module.exports = App;
