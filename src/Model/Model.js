const { compareNum } = require('../utils/capareNum');
const { mkOpponentNum } = require('../utils/mkOpponentNum')


class Model {

  opponentNum 
  playerNum
  ball
  strike

  constructor(){
    this.opponentNum = '';
    this.playerNum = '';
    this. ball = 0;
    this.strike = 0;
  }

  createOpponentNum(){
    this.opponentNum = mkOpponentNum();
    }
  
  savePlayerNum(input){
    this.playerNum = input;
    this.ballStrike();
  }

  ballStrike(){
    const opponentArray = this.opponentNum.split('');
    const playerArray = this.playerNum.split('');
    const ballStrike = compareNum(opponentArray, playerArray);
    this.ball = ballStrike.ball;
    this.strike = ballStrike.strike;
  }
}

module.exports = Model
