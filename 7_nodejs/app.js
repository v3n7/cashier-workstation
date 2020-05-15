const express = require("express");
const routes = require('./routes')


const authMiddleware = require('./middleware/auth')
const errorMiddleware = require('./middleware/error')

class App {
  constructor(port = 3000) {
    this._port = port;
    this.app = express();
  }

  run() {
    this.app.use(authMiddleware)
    this.app.use(routes)
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
