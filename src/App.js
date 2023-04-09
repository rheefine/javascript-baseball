const { Console } = require('@woowacourse/mission-utils');

function main() {
  Console.print('숫자 야구 게임을 시작합니다.');
  opponentInput();
}

function opponentInput() {
  Console.readLine('정답 숫자:', (number) => {
    const opponentNum = number;
    let playerNum;
    compareLoop(opponentNum, playerNum);
  });
}

function compareLoop(opponentNum, playerNum) {
  Console.readLine('숫자를 입력해주세요.', (number) => {
    playerNum = number;
    strike3(opponentNum, playerNum);
  });
}

function strike3(opponentNum, playerNum) {
  if (opponentNum === playerNum) {
    console.log('정답');
  } else {
    console.log(strikeBallCount(opponentNum, playerNum));
    compareLoop(opponentNum);
  }
}

function mkNumArray(opponentNum, playerNum) {
  const opponentArray = opponentNum.split('');
  const playerArray = playerNum.split('');
  return {
    opponentArray,
    playerArray,
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
    ball,
    strike,
  };
}

main();

/*
정답을 입력받고 배열으로 바꾸기
입력받은 값이 같으면 종료
플레이어 입력받기 입력받은 거를 배열로 넣기
배열을 check check
strike ball 판정
두개의 배열을 array.includes or array.indexof
사용해서 숫자가 존재하는지 판정 (ball 판정)
만약 ball 이면 index 까지 확인해서 strike 인지 판정
*/

// template literory
