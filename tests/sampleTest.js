const data = require('../test_data/data');
const page = require('../page_objects/page')
const loginPage = require('../page_objects/loginPage');
const homePage = require('../page_objects/homePage');
const createAccountPage = require('../page_objects/createAccountPage');

beforeEach(function () {
  page.openUrl()
})

describe("SignIn into the Site", function() {
    it("Varify banner error", function() {
        homePage.clickLoginLink();
        loginPage.enterUserCredentials(data.emptyEmail)
        expect(loginPage.idBannerErrorDisplayed()).toBe(true);
    });

    it("Verify user is created successfully", function() {
        homePage.clickLoginLink();
        loginPage.enterUserCredentials(data.email)
        createAccountPage.fillFormAndRegisterUser(data.gender,data.firstName,data.lastName,data.email,data.password,data.dayOfBirth,data.monthOfBirth,data.yearOfBirth,data.company,data.address,data.city,data.state,data.zipcode,data.information,data.homePhone,data.cellphoneNo,data.alias);
    });
});
