const casual = require('casual');

const Data = function () {

   this.emptyEmail = "";
   this.email = casual.email;
   this.password = casual.password;
   this.gender = casual.boolean;
   this.firstName = casual.first_name;
   this.lastName = casual.last_name;
   this.yearOfBirth = casual.year ;
   this.monthOfBirth = casual.month_number;
   this.dayOfBirth = casual.day_of_month;
   this.company = casual.company_name;
   this.address = casual.address;
   this.city = casual.city;
   this.state = casual.state;
   this.zipcode = 45598;
   this.information = casual.string;
   this.homePhone = casual.phone;
   this.cellphoneNo = casual.phone;
   this.alias = "fulanito";
 }
 module.exports = new Data();
