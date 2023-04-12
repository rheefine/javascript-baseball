const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  gameStart : '숫자 야구 게임을 시작합니다.',
  numInput : '숫자를 입력해주세요.',
  ball : '볼',
  strike : '스트라이크',
  nothing : '낫싱',
  gameEnd : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
}


const view = {
  readPlayerNum(callback){
    Console.readLine(MESSAGE.numInput, (input) => {
      callback(input);
      })
  },

  readRestartEnd(callback){
    Console.readLine(MESSAGE.restart, (input) => {
      callback(input);
    })
  },

  printGameStart(){
    Console.print(`${MESSAGE.gameStart}`)
  },

  printBallStrike(ball, strike){
    Console.print(`${ball}${MESSAGE.ball} ${strike}${MESSAGE.strike}`);
  },

  printBall(ball){
    Console.print(`${ball}${MESSAGE.ball}`);     
  },

  printStrike(strike){
    Console.print(`${strike}${MESSAGE.strike}`);
  },

  printNothing(){
    Console.print(MESSAGE.nothing);
  },

  printThreeStrike(){
    Console.print(`3${MESSAGE.strike}`);
    Console.print(MESSAGE.gameEnd);
  },

  exit(){
      return Console.close()
  }
}

module.exports = view;