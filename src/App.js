const { StartController } = require('./controllers/StartController');

function play() {
  StartController()
}  

// play()

class App{
  play() {
    StartController()
  }  
}
module.exports = App;
