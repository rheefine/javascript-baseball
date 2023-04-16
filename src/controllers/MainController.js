const Model = require('../Model/Model');
const { 
  readPlayerNum,
  readRestartEnd,
  printBallStrike,
  printBall,
  printStrike,
  printNothing,
  printThreeStrike,
  exit,
 } = require('../view/view');

const model = new Model

class MainController {

  mainGameController(){
    model.createOpponentNum();
    this.getPlayerNum();
  }

  getPlayerNum(){
    readPlayerNum(this.ballCountController.bind(this));
  }

  ballCountController(input){
    model.savePlayerNum(input);
    if (model.opponentNum === model.playerNum) {
      printThreeStrike();
      this.endController();
    } 
    if (model.opponentNum !== model.playerNum && model.ball > 0 && model.strike > 0) {
      printBallStrike(model.ball, model.strike); 
      this.getPlayerNum(); 
    }
    if (model.pponentNum !== model.playerNum && model.ball > 0 && model.strike === 0) {
      printBall(model.ball);
      this.getPlayerNum();
    }
    if (model.opponentNum !== model.playerNum && model.ball === 0 && model.strike > 0) {
      printStrike(model.strike);
      this.getPlayerNum();
    }
    if (model.opponentNum !== model.layerNum && model.ball === 0 && model.strike ===0) {
      printNothing();
      this.getPlayerNum();
    }
    
  }

  endController() {
    readRestartEnd(this.gameEnd.bind(this));
  }

  gameEnd(input){
    if (input==='1'){
      this.mainGameController();
    }
    if (input==='2'){
      exit();
    }
  }
}

module.exports = MainController
