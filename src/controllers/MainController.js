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


class MainController {
  #model

  mainGameController(){
    this.#model = new Model()
    this.sendPlayerNum();
  }

  sendPlayerNum(){
    readPlayerNum(this.ballCountController.bind(this));
  }

  ballCountController(input){
    this.#model.savePlayerNum(input);
    if (this.#model.getOpponentNum() === this.#model.getPlayerNum()) {
      printThreeStrike();
      this.endController();
    } 
    if (this.#model.getOpponentNum() !== this.#model.getPlayerNum()){
      this.ballCountOutput()
      this.sendPlayerNum();
    }
  }

  ballCountOutput(){
    if (this.#model.getBall() > 0 && this.#model.getStrike() > 0) {
      printBallStrike(this.#model.getBall(), this.#model.getStrike()); 
    }
    if (this.#model.getBall() > 0 && this.#model.getStrike() === 0) {
      printBall(this.#model.getBall());
    }
    if (this.#model.getBall() === 0 && this.#model.getStrike() > 0) {
      printStrike(this.#model.getStrike());
    }
    if (this.#model.getBall() === 0 && this.#model.getStrike() ===0) {
      printNothing();
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

  getModel(){
    return this.#model
  }

}

module.exports = MainController
