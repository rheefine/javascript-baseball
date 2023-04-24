const { Console } = require('@woowacourse/mission-utils');
const {
  checkCorrectMainNumber,
  checkCorrectMainNumbersize,
  checkCorrectMainNumberRange,
  checkDuplicationMainNumber,
  checkOneOrTwo,
} = require('../validation/validation');

const MESSAGE = Object.freeze({
  game_start: '숫자 야구 게임을 시작합니다.',
  num_input: '숫자를 입력해주세요.',
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
  gameEnd: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const view = {
  readPlayerNum(comeback, callback) {
    Console.readLine(MESSAGE.num_input, (input) => {
      view.mainNumberValidation(input.split('').map(Number));
      callback(input);
      /*
      try {
        view.mainNumberValidation(input.split('').map(Number));
        callback(input);
      } catch (e) {
        view.errorHandler(e, comeback);
      }
      */
    });
  },

  mainNumberValidation(input) {
    checkCorrectMainNumber(input);
    checkCorrectMainNumbersize(input);
    checkCorrectMainNumberRange(input);
    checkDuplicationMainNumber(input);
  },

  readRestartEnd(comeback, callback) {
    Console.readLine(MESSAGE.restart, (input) => {
      try {
        checkOneOrTwo(input);
        callback(input);
      } catch (e) {
        view.errorHandler(e, comeback);
      }
    });
  },

  printGameStart() {
    Console.print(`${MESSAGE.game_start}`);
  },

  printBallStrike(ball, strike) {
    Console.print(`${ball}${MESSAGE.ball} ${strike}${MESSAGE.strike}`);
  },

  printBall(ball) {
    Console.print(`${ball}${MESSAGE.ball}`);
  },

  printStrike(strike) {
    Console.print(`${strike}${MESSAGE.strike}`);
  },

  printNothing() {
    Console.print(MESSAGE.nothing);
  },

  printThreeStrike() {
    Console.print(`3${MESSAGE.strike}`);
    Console.print(MESSAGE.gameEnd);
  },

  errorHandler(error, callback) {
    Console.print(error.message);
    callback();
  },

  exit() {
    return Console.close();
  },
};

module.exports = view;
