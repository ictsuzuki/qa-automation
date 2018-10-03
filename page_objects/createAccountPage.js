const locators = require('../utils/locators.js');
const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function CreateAccountPage() {
  // Web elements for Login;
  this.genderCheckBoxes = element.all(by.css(locators.genderCheckboxesArr));
  this.firstNameField = element(by.id(locators.firstNameTextField));
  this.lastNameField = element(by.id(locators.lastNameTextField));
  this.emailField = element(by.id(locators.emailTextFieldToCreate));
  this.passwordField = element(by.id(locators.passwordTextField));
  this.dateDropdowns = element.all(by.css(locators.dateDropdownsArr));
  this.firstNameAddress = element(by.id(locators.firstNameAddressTextField));
  this.lastNameAddress = element(by.id(locators.lastNameAddressTextField));
  this.company = element(by.id(locators.companyTextField));
  this.addressFields = element.all(by.css(locators.addressTextFieldsArr));
  this.cityField = element(by.id(locators.cityTextField));
  this.stateDropdown = element.all(by.id(locators.stateDropdownArr));
  this.zipCodeField = element(by.id(locators.zipCodeTextField));
  this.extraInformationField = element(by.id(locators.extraInformationTextField));
  this.homePhone = element(by.id(locators.homePhoneTextField));
  this.cellphoneField = element(by.id(locators.cellPhoneTextField));
  this.aliasField = element(by.id(locators.alisTextField));
  this.registerButton = element(by.id(locators.registerBtn));

  /**
   * @description Function used to select a gender
   * @method selectGender
   * @param {Boolean} gender
   */
  this.selectGender = (gender) =>{
    if(gender){
      actions.clickToElement(this.genderCheckBoxes.get(0));
    }else{
      actions.clickToElement(this.genderCheckBoxes.get(1));
    }
  }

  /**
   * @description Function used to fill the form and register a new user
   * @method fillFormAndRegisterUser
   * @param {String} gender
   * @param {String} firstName
   * @param {String} lastName
   * @param {String} email
   * @param {String} password
   * @param {String} dayOfBirth
   * @param {String} monthOfBirth
   * @param {String} yearOfBirth
   * @param {String} company
   * @param {String} address
   * @param {String} city
   * @param {String} state
   * @param {String} zipcode
   * @param {String} information
   * @param {String} homePhone
   * @param {String} cellphone
   * @param {String} alias
   */
  this.fillFormAndRegisterUser = (gender,firstName,lastName,email,password,dayOfBirth,monthOfBirth,yearOfBirth,company,address,city,state,zipcode,information,homePhone,cellphone,alias) =>{
    this.selectGender(gender);
    actions.enterText(this.firstNameField,firstName);
    actions.enterText(this.lastNameField,lastName);
    actions.clickToElement(this.emailField);
    actions.selectOptionFromDropdownElementByValue(this.dateDropdowns.get(0),dayOfBirth);
    actions.selectOptionFromDropdownElementByValue(this.dateDropdowns.get(1),monthOfBirth);
    actions.selectOptionFromDropdownElementByValue(this.dateDropdowns.get(2),yearOfBirth);
    actions.enterText(this.firstNameAddress,firstName);
    actions.enterText(this.lastNameAddress,lastName);
    actions.enterText(this.company,company);
    actions.enterText(this.addressFields.get(0),address);
    actions.enterText(this.cityField,city);
    actions.selectOptionFromDropdownElementByText(this.stateDropdown,state);
    actions.scrollDownUntilAnElement(this.zipCodeField)
    actions.enterText(this.zipCodeField,zipcode);
    actions.enterText(this.extraInformationField,information);
    actions.enterText(this.homePhone,homePhone);
    actions.enterText(this.cellphoneField,cellphone);
    actions.enterText(this.aliasField,alias);
    actions.enterText(this.passwordField,password);
    actions.clickToElement(this.registerButton);
  }
}
module.exports = new CreateAccountPage();
