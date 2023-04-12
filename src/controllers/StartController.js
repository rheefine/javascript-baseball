const { printGameStart, readPlayerNum } = require('../view/view');
const Model = require('../Model/Model');
const MainController = require('./MainController');

function startController() {
  const mainController = new MainController();
  printGameStart();
  mainController.mainGameController();
}

exports.startController = startController
