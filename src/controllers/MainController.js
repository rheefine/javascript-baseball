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

  mainGameController(){
    let input;
    readPlayerNum(this.ballCountController(input));
  }

  ballCountController(input){
    const model = new Model
    const opponentNum = model.opponentNum();
    const playerNum = model.playerNum(input);
    const ballStrike = model.ballStrike();
    if (opponentNum === playerNum) {
      printThreeStrike();
      readRestartEnd();
      exit();
    } 
    if (opponentNum !== playerNum && ballStrike.ball > 0 && ballStrike.strike > 0) {
      printBallStrike(ballStrike.ball, ballStrike.strike); 
      this.mainGameController(); 
    }
    if (opponentNum !== playerNum && ballStrike.ball > 0 && ballStrike.strike === 0) {
      printBall(ballStrike.ball);
      this.mainGameController();
    }
    if (opponentNum !== playerNum && ballStrike.ball === 0 && ballStrike.strike > 0) {
      printStrike(ballStrike.strike);
      this.mainGameController();
    }
    if (opponentNum !== playerNum && ballStrike.ball === 0 && ballStrike.strike ===0) {
      printNothing();
      this.mainGameController();
    }
    
  }

}

module.exports = MainController


/*
function gameEnd(){
  Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',(number) => {
    if (number==='1'){
      let opponentNum = mkOpponentNum();
      playerInput(opponentNum);
    }
    if (number==='2'){
      Console.close();
    }
  })
}
*/