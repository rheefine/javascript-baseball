const Model = require('../Model/Model');
const {
  readPlayerNum,
  readRestartEnd,
  printGameStart,
  printBallStrike,
  printBall,
  printStrike,
  printNothing,
  printThreeStrike,
  exit,
} = require('../view/view');

class Controller {
  #model;

  constructor() {
    printGameStart();
  }

  mainGameController() {
    this.#model = new Model();
    this.sendPlayerNum();
  }

  sendPlayerNum() {
    readPlayerNum(
      this.sendPlayerNum.bind(this),
      this.ballCountController.bind(this),
    );
  }

  ballCountController(input) {
    this.#model.savePlayerNum(input);
    if (this.#model.getOpponentNum() !== this.#model.getPlayerNum()) {
      this.ballCountOutputController();
      this.sendPlayerNum();
    }
    if (this.#model.getOpponentNum() === this.#model.getPlayerNum()) {
      printThreeStrike();
      this.endController();
    }
  }

  ballCountOutputController() {
    const ballCount = this.#model.getBall();
    const strikeCount = this.#model.getStrike();

    if (ballCount > 0 && strikeCount > 0) {
      printBallStrike(ballCount, strikeCount);
    }
    if (ballCount > 0 && strikeCount === 0) {
      printBall(ballCount);
    }
    if (ballCount === 0 && strikeCount > 0) {
      printStrike(strikeCount);
    }
    if (ballCount === 0 && strikeCount === 0) {
      printNothing();
    }
  }

  endController() {
    readRestartEnd(this.endController.bind(this), this.gameEnd.bind(this));
  }

  gameEnd(input) {
    if (input === '1') {
      this.mainGameController();
    }
    if (input === '2') {
      exit();
    }
  }
}

module.exports = Controller;
