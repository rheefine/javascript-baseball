const Controller = require('./Controller/Controller');

class App {
  play() {
    const controller = new Controller();
    controller.mainGameController();
  }
}

const app = new App();
app.play();

module.exports = App;
