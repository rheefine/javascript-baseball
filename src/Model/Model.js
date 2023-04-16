const { mkOpponentNum } = require('../utils/mkOpponentNum')


class Model {
  opponentNum(){
    const opponentNum = mkOpponentNum()
      return opponentNum
    }
  
  playerNum(input){
    const playerNum = input
    return playerNum
  }

  ballStrike(playerNum, opponentNum){
    const opponentArray = opponentNum.split('');
    const playerArray = playerNum.split('');
    let ball = 0;
    let strike = 0;
    opponentArray.forEach((element, index) => {
      if (
        playerArray.includes(element)
        && playerArray.indexOf(element) === index
      ) {
        strike += 1;
      }
      if (
        playerArray.includes(element)
        && playerArray.indexOf(element) !== index
      ) {
        ball += 1;
      }
    });
    return {ball, strike};
  }

}

module.exports = Model
