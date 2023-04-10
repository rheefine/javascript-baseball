const { Random } = require('@woowacourse/mission-utils');
const { Console } = require('@woowacourse/mission-utils');

class App{
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let opponentNum = opponentInput();
    compareLoop(opponentNum);
  }  
}

function play() {
  Console.print('숫자 야구 게임을 시작합니다.');
  let opponentNum = opponentInput();
  compareLoop(opponentNum);
}  


function opponentInput() {
  let opponentNum = '';
    while (opponentNum.length < 3){
      const number = Random.pickNumberInRange(1, 9);
      if (!opponentNum.includes(number))
        opponentNum += number;
    }
    return opponentNum;
}

function compareLoop(opponentNum) {
  let playerNum;
  Console.readLine('숫자를 입력해주세요.', (number) => {
    if (!(number.length===3)){
      throw Error(" 3개의 숫자를 입력해주세요");
    }
    playerNum = number;
    strike3(opponentNum, playerNum);
  });
}

function strike3(opponentNum, playerNum) {
  let strikeBall = strikeBallCount(opponentNum,playerNum);
  if (opponentNum === playerNum) {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    gameEnd();
  } 
  if (opponentNum !== playerNum && strikeBall.ball === 0 && strikeBall.strike ===0) {
    Console.print('낫싱');
    compareLoop(opponentNum);
  }
  if (opponentNum !== playerNum && strikeBall.ball === 0 && strikeBall.strike > 0) {
    Console.print(`${strikeBall.strike}스트라이크`)
    compareLoop(opponentNum);
  }
  if (opponentNum !== playerNum && strikeBall.ball > 0 && strikeBall.strike === 0) {
    Console.print(`${strikeBall.ball}볼`)
    compareLoop(opponentNum);
  }
  if (opponentNum !== playerNum && strikeBall.ball > 0 && strikeBall.strike > 0) {
    Console.print(`${strikeBall.ball}볼 ${strikeBall.strike}스트라이크`)
    compareLoop(opponentNum);
  }


}

function gameEnd(){
  Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',(number) => {
    if (number==='1'){
      let opponentNum = opponentInput();
      compareLoop(opponentNum);
    }
    if (number==='2'){
      Console.close();
    }
  })
}

function mkNumArray(opponentNum, playerNum) {
  const opponentArray = opponentNum.split('');
  const playerArray = playerNum.split('');
  return {
    opponentArray: opponentArray,
    playerArray: playerArray,
  };
}

function strikeBallCount(opponentNum, playerNum) {
  const NumArray = mkNumArray(opponentNum, playerNum);
  let ball = 0;
  let strike = 0;
  NumArray.opponentArray.forEach((element, index) => {
    if (
      NumArray.playerArray.includes(element)
      && NumArray.playerArray.indexOf(element) === index
    ) {
      strike += 1;
    }
    if (
      NumArray.playerArray.includes(element)
      && NumArray.playerArray.indexOf(element) !== index
    ) {
      ball += 1;
    }
  });
  return {
    ball: ball,
    strike: strike,
  };
}

// play()
module.exports = App;
