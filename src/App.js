const { startController } = require('./controllers/startController');

class App{
  play() {
    startController()
  }  
}

const app = new App();
app.play();


module.exports = App;
