const locators = require('../utils/locators.js');
const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage() {
  // Web elements for Login
  this.emailTextField = element(by.id(locators.emailTextField));
  this.bannerError = element(by.id(locators.bannerError));
  this.createAccountBtn = element(by.id(locators.createAccountBtn));
  /**
   * @description Function used to enter credentials for Login then click on Login Button
   * @method enterUserCredentials
   * @param {String} email
   * @param {String} pass
   */
  this.enterUserCredentials = (email) => {
    actions.enterText(this.emailTextField, email);
    actions.clickToElement(this.createAccountBtn);
  };

  /**
   * @description Function used to verify if the error banner is displayed
   * @method idBannerErrorDisplayed
   */
  this.idBannerErrorDisplayed = () => {
    return actions.isElementDisplayed(this.bannerError);
  }
}
module.exports = new LoginPage();
