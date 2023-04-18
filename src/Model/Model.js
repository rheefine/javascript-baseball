const { compareNum } = require('../utils/compareNum');
const { mkOpponentNum } = require('../utils/mkOpponentNum');

class Model {
  #opponentNum;

  #playerNum;

  #ball;

  #strike;

  constructor() {
    this.#opponentNum = mkOpponentNum();
    this.#playerNum = '';
    this.#ball = 0;
    this.#strike = 0;
  }

  savePlayerNum(input) {
    this.#playerNum = input;
    this.ballStrike();
  }

  ballStrike() {
    const opponentArray = this.#opponentNum.split('');
    const playerArray = this.#playerNum.split('');
    const strikeBall = compareNum(opponentArray, playerArray);
    this.#ball = strikeBall.ball;
    this.#strike = strikeBall.strike;
  }

  getOpponentNum() {
    return this.#opponentNum;
  }

  getPlayerNum() {
    return this.#playerNum;
  }

  getBall() {
    return this.#ball;
  }

  getStrike() {
    return this.#strike;
  }
}

module.exports = Model;
