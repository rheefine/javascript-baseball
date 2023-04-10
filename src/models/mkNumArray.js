

function mkNumArray(opponentNum, playerNum) {
    const opponentArray = opponentNum.split('');
    const playerArray = playerNum.split('');
    return {
      opponentArray: opponentArray,
      playerArray: playerArray,
    };
  }

exports.mkNumArray = mkNumArray;
