const { Console } = require('@woowacourse/mission-utils');
const { strikeBallCount } = require('../models/strikeBallCount');
const { mkOpponentNum } = require('../models/mkOpponentNum');

function playerInput(opponentNum) {
  let playerNum;
  Console.readLine('숫자를 입력해주세요.', (number) => {
    if (!(number.length===3)){
      throw Error(" 3개의 숫자를 입력해주세요");
    }
    playerNum = number;
    strikeBallView(opponentNum, playerNum);
  });
}

function strikeBallView(opponentNum, playerNum) {
  let strikeBall = strikeBallCount(opponentNum,playerNum);
  if (opponentNum === playerNum) {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    gameEnd();
  } 
  if (opponentNum !== playerNum && strikeBall.ball === 0 && strikeBall.strike ===0) {
    Console.print('낫싱');
    playerInput(opponentNum);
  }
  if (opponentNum !== playerNum && strikeBall.ball === 0 && strikeBall.strike > 0) {
    Console.print(`${strikeBall.strike}스트라이크`)
    playerInput(opponentNum);
  }
  if (opponentNum !== playerNum && strikeBall.ball > 0 && strikeBall.strike === 0) {
    Console.print(`${strikeBall.ball}볼`)
    playerInput(opponentNum);
  }
  if (opponentNum !== playerNum && strikeBall.ball > 0 && strikeBall.strike > 0) {
    Console.print(`${strikeBall.ball}볼 ${strikeBall.strike}스트라이크`)
    playerInput(opponentNum);
  }
}

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

exports.playerInput = playerInput