/// <reference types="cypress" />
import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import "cypress-iframe";
  

  import parabank_PO from "../page-object/parabank_PO";

    let parabank = new parabank_PO; 



  Given('I open the parabank Site', () => {
    parabank.openParaBank();
  });

  When('I click on the Register link', () => {
    parabank.registerLinkClick();
  });

  When('I add valid registration data', () => { 
    parabank.inputRegisterInfo(); 
  });

  When('I click on the Register button', () => {
    parabank.registerButtonClick(); 
  });

  Then('I verify user registered successfully', () => { 
    parabank.verifyRegistration();
  });

  When('I enter the valid username {string}', (uname) => {
    parabank.validUsername(uname); 
  });

  
  When('I enter the valid password {string}', (pswrd) => {
    parabank.validPassword(pswrd); 
  });

  When('I click the Login button', () => {
    parabank.clickLoginButton();
  });

  Then('I verify that the user is able to login successfully in the ParaBank application', () => {
    parabank.accountVerification();
  });

  When('I click on Open New Account', () => {
    parabank.openNewAccount();
  });

  Then('I verify that the Account Overview page is displayed', () => {
    parabank.verifyNewAccountType();
  });