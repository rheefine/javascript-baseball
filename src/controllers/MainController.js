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

  #opponentNum

  constructor(){
    this.#opponentNum = '';
  }

  
  getOpponentNum(){
    this.#opponentNum = model.opponentNum()
    console.log(this.#opponentNum)
  }

  getPlayerNum(){
    readPlayerNum(this.ballCountController.bind(this));
  }

  mainGameController(){
    this.getOpponentNum();
    this.getPlayerNum();
  }


  ballCountController(input){
    const playerNum = input
    const ballStrike = model.ballStrike(playerNum, this.#opponentNum);
    if (this.#opponentNum === playerNum) {
      printThreeStrike();
      this.endController();
    } 
    if (this.#opponentNum !== playerNum && ballStrike.ball > 0 && ballStrike.strike > 0) {
      printBallStrike(ballStrike.ball, ballStrike.strike); 
      this.getPlayerNum(); 
    }
    if (this.#opponentNum !== playerNum && ballStrike.ball > 0 && ballStrike.strike === 0) {
      printBall(ballStrike.ball);
      this.getPlayerNum();
    }
    if (this.#opponentNum !== playerNum && ballStrike.ball === 0 && ballStrike.strike > 0 && ballStrike.strike < 2) {
      //<2 추가된 이유 : array는 안바뀌어서 opponentnum 이랑 playernum 은 같은데 두개의 어레이가 같은 상황이 발생
      printStrike(ballStrike.strike);
      this.getPlayerNum();
    }
    if (this.#opponentNum !== playerNum && ballStrike.ball === 0 && ballStrike.strike ===0) {
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
