const { Console } = require("@woowacourse/mission-utils");

function main() {
  Console.print("숫자 야구 게임을 시작합니다.");
  opponentInput();
}

function opponentInput() {
  Console.readLine("정답 숫자:", (number) => {
    const a = number;
    const aArray = number.split("");
    let b;
    compareLoop(a, aArray, b);
  });
}

function compareLoop(a, aArray, b) {
  while (a !== b) {
    Console.readLine("숫자를 입력해주세요.", (number) => {
      b = number;
      const bArray = number.split("");
    });
    if (a === b) {
      break;
    }
  }
}

main();

/*
정답을 입력받고 배열으로 바꾸기
입력받은 값이 3strike가 true 일 때 까지 while
플레이어 입력받기 입력받은 거를 배열로 넣기
배열을 check check 
strike ball 판정
두개의 배열을 array.includes or array.indexof 
사용해서 숫자가 존재하는지 판정 (ball 판정)
만약 ball 이면 index 까지 확인해서 strike 인지 판정
*/

// template literory
