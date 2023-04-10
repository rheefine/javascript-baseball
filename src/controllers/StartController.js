const { startView } = require('../views/startView');
const { mkOpponentNum } = require('../models/mkOpponentNum');
const { playerInput } = require('../views/playerInputOutput');

function StartController() {
    startView()
    let opponentNum = mkOpponentNum();
    playerInput(opponentNum);
}

exports.StartController = StartController