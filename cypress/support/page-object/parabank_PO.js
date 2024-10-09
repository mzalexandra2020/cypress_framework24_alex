/// <reference types="cypress" />


class parabank_PO { 

  
//Elements
constructor() {
//registration
  this.registerLink = "a[href='register.htm']";

  this.firstName = "input[id='customer.firstName']";
  this.lastName = "input[id='customer.lastName']";
  this.addressStreet = "input[id='customer.address.street']"; 
  this.addressCity = "input[id='customer.address.city']";
  this.addressState = "input[id='customer.address.state']";
  this.addressZip = "input[id='customer.address.zipCode']";
  this.phoneNumber = "input[id='customer.phoneNumber']";
  this.customerSSN = "input[id='customer.ssn']";
  this.registrationUsername = "input[id='customer.username']";
  this.registrationPassword = "input[id='customer.password']";
  this.confirmPassword = "input[id='repeatedPassword']";
  
  this.registerButton = "input[value='Register']"; 

  this.registerSuccess = ".title";
  // "#rightPanel"; 




  //homepage links
   this.solutions= ".Solutions";



  //login
  this.username = "input[name='username']";
  this.userPassword = "input[name='password']";
  this.logInButton = "input[value='Log In']";

  //account
  this.accountTable = "#accountTable";
  this.openNewAccountLink = "a[href='openaccount.htm']"; 

  //open New Account page
  this.openNewAccountForm = "#openAccountForm"; 
  this.checking = "option[value='0']";


}




//Functions 

openParaBank() {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm"); 
}

registerLinkClick(){
  cy.visit("https://parabank.parasoft.com/parabank/register.htm");
}

inputRegisterInfo() {

  // const randomNumber = Math.floor(Math.random() * 10000);
  //  username1 = data.registrationUsername + randomNumber; 

  cy.fixture("parabank.json").then((data) => {
    const randomNumber = Math.floor(Math.random() * 10000);
    let username1 = data.user1.registrationUsername + randomNumber; 


   cy.get(this.firstName).type(data.user1.firstName);
   cy.get(this.lastName).type(data.user1.lastName);
   cy.get(this.addressStreet).type(data.user1.addressStreet);
   cy.get(this.addressCity).type(data.user1.addressCity);
   cy.get(this.addressState).type(data.user1.addressState);
   cy.get(this.addressZip).type(data.user1.addressZip);
   cy.get(this.phoneNumber).type(data.user1.phoneNumber);
   cy.get(this.customerSSN).type(data.user1.customerSSN);
   cy.get(this.registrationUsername).type(username1);
   cy.get(this.registrationPassword).type(data.user1.registrationPassword);
   cy.get(this.confirmPassword).type(data.user1.confirmPassword);

  }); 

}

 

  // cy.get(this.firstName).type("Alex");
  // cy.get(this.lastName).type("Martini");
  // cy.get(this.addressStreet).type("101 Main");
  // cy.get(this.addressCity).type("Austin");
  // cy.get(this.addressState).type("TX");
  // cy.get(this.addressZip).type("78502");
  // cy.get(this.phoneNumber).type("502-502-5502");
  // cy.get(this.customerSSN).type("555-44-3333");
  // cy.get(this.registrationUsername).type("amartini3");
  // cy.get(this.registrationPassword).type("password1");
  // cy.get(this.confirmPassword).type("password1");



registerButtonClick(){
  cy.get(this.registerButton).click();
}

verifyRegistration(){
  cy.get(this.registerSuccess).should("contain.text", "Welcome"); 
}


validUsername(uname){
  cy.get(this.username).type(uname); 
}

validPassword(pswrd){
  cy.get(this.userPassword).type(pswrd); 
}

clickLoginButton(){
  cy.get(this.logInButton).click();
}

accountVerification(){
  cy.get(this.accountTable).should("be.visible");
  cy.get(this.accountTable).should("contain", "Balance");
}

openNewAccount(){
  cy.get(this.openNewAccountLink).click();
}

verifyNewAccountType(){
  cy.get(this.openNewAccountForm).should("contain", "What type of Account "); 
}


}
  
  export default parabank_PO;
  