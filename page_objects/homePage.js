const locators = require('../utils/locators.js');
const actions = require('../base/actions');

/**
 * @description Page Object for Home Page.
 */
function HomePage() {
  // Web elements for Home Page
  this.loginLink = element(by.className(locators.loginLink));
  var self = this;

  /**
   * @description Function used to click on Login link
   * @method clickLoginLink
   */
  this.clickLoginLink = () => {
    actions.clickToElement(self.loginLink);
  };
}
module.exports = new HomePage();
