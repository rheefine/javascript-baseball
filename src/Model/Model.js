const { compareNum } = require('../utils/capareNum');
const { mkOpponentNum } = require('../utils/mkOpponentNum')


class Model {

  #opponentNum 
  #playerNum
  #ball
  #strike

  constructor(){
    this.#opponentNum = mkOpponentNum();
    this.#playerNum = '';
    this.#ball = 0;
    this.#strike = 0;
  }

  savePlayerNum(input){
    this.#playerNum = input;
    this.ballStrike()
  }

  ballStrike(){
    const opponentArray = this.#opponentNum.split('');
    const playerArray = this.#playerNum.split('');
    const ballStrike = compareNum(opponentArray, playerArray);
    this.#ball = ballStrike.ball;
    this.#strike = ballStrike.strike;
  }

  getOpponentNum(){
    return this.#opponentNum
  }

  getPlayerNum(){
    return this.#playerNum
  }

  getBall(){
    return this.#ball
  }

  getStrike(){
    return this.#strike
  }

}

module.exports = Model
