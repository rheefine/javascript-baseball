const { printGameStart } = require('../view/view');
const MainController = require('./MainController');

function startController() {
  const mainController = new MainController();
  printGameStart();
  mainController.mainGameController();
}

exports.startController = startController
