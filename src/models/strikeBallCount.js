const { mkNumArray } = require('./mkNumArray');

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

exports.strikeBallCount = strikeBallCount;
