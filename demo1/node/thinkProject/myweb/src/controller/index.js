const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.assign('title',"this is a new webpage");
    return this.display();
  }
};
