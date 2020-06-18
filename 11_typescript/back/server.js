const App = require("./app");
const Config = require("./config");
const app = new App(Config.PORT);

app.run();

