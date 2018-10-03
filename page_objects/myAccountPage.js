const actions = require('../base/actions');

/**
 * @description Page Object for My Account Page.
 */
function MyAccountPage() {
  // Web elements for Login
  this.titlePage = element(by.className(locators.titlePage));

  /**
   * @description Function used to know if the My account title is displayed
   * @method isBannerErrorDisplayed
   */
  this.isMyAccountTitleDisplayed = () => {
    return actions.isElementDisplayed(this.titlePage);
  };
}
module.exports = new MyAccountPage();
