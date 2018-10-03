const Locators = function () {
  /**
   * @description Locators for Home Page by ClassName
   */
  this.loginLink = "login";

  /**
   * @description Locators for Login Page by id
   */
  this.emailTextField = "email_create";
  this.createAccountBtn = "SubmitCreate";
  this.bannerError = "create_account_error";

  /**
   * @description Locators for Create Account Page by id
   */
  this.firstNameTextField = "customer_firstname";
  this.lastNameTextField = "customer_lastname";
  this.emailTextFieldToCreate = "email";
  this.passwordTextField = "passwd";
  this.firstNameAddressTextField = "firstname";
  this.lastNameAddressTextField = "lastname";
  this.companyTextField = "company";
  this.cityTextField = "city";
  this.zipCodeTextField = "postcode";
  this.extraInformationTextField = "other";
  this.homePhoneTextField = "phone";
  this.cellPhoneTextField = "phone_mobile";
  this.alisTextField = "alias";
  this.registerBtn = "submitAccount";

  /**
   * @description Array locators for Create Account Page by css
   */
   this.stateDropdownArr = "id_state";

  /**
   * @description Array locators for Create Account Page by id
   */
  this.genderCheckboxesArr = "input[name=id_gender]";
  this.dateDropdownsArr = "div[class^='col-xs']";
  this.addressTextFieldsArr = "input[name^='address']";

  /**
   * @description Locators for My Account Page by class Name
   */
   this.titlePage = "page-heading";
 }
 module.exports = new Locators();
