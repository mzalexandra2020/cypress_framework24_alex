/// <reference types="cypress" />
import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import "cypress-iframe";
  import demoblaze_PO from "../page-object/amartinez_cart_PO";
  import amartinez_cart_PO from "../page-object/amartinez_cart_PO";
  import amartinez_home_PO from "../page-object/amartinez_home_PO";
 

  let demo = new amartinez_cart_PO;
  let demo1 = new amartinez_home_PO; 

  Given('I navigate to the Demoblaze homepage and login with valid credentials', () =>{
    demo.loginValid(); 
  });

  Then ('Welcome User message is displayed', () =>{
    demo.loginValidation();

  });

  Given('I navigate to the Demoblaze homepage', () =>{
    demo1.openHomepage();
  });
  When('I click a product {string}', (product) => {
    demo.clickProduct(product);

  }); 
  When('I click a category phone', () => {
    demo1.clickCategoryPhones();

  });

  When('I add the product to the cart', () => {
    demo.addProductToCart();

  });

  Then('the product {string} should be added to the cart', (product) => {
    demo.itemInCart(product);
  });

  When('I click the Place Order Button', () => {
    demo.placeOrder();
  })

  When('I fill out the Place Order Field', () =>{
    demo.filloutPlaceOrderModal(); 
  })

  Then('I should see an order confirmation', () =>{
    demo.confirmPurchase();
  })

  Then ('I verify a carousel element is present', () => {
    demo1.verifyCarousel();
  })

  When ('I click {string} tab', (tabName)=> {
    if (tabName === "Contact") {
      demo1.clickContactTab(); 
    } else if (tabName === "About Us"){
      demo1.clickAboutUsTab();
    }else if(tabName === "Log In"){
      demo1.clickLogInTab(); 
    }else if(tabName === "Sign Up"){
      demo1.clickSignUpTab();
    }else {
      demo1.clickHomeTab(); 
    }
  })

  Then ('New Message pop up opens up and I can send a message', () => {
    demo1.verifyNewMessageModal(); 
  })

  Then ('I verify about us video', () => {
    demo1.verifyAboutUsVideo(); 
  })

  Then ('log in modal opens up', () => {
    demo1.verifyLogInModal(); 
  })
       
  Then ('sign up modal opens up', () => {
    demo1.verifySignUpModal(); 
  })

  When ('I click a category {string}', (catName)=> {
    if (catName === "phone") {
      demo1.clickCategoryPhone(); 
    } else if (tabName === "laptop"){
      demo1.clickCategoryLaptop();
    }else if(tabName === "monitor"){
      demo1.clickCategoryMonitor(); 
    }else {
      demo1.clickHomeTab(); 
    }
  })

  Then ('I verify {string} products display', (productDisplay) => {
    if(productDisplay === "phone") {
      demo1.verifyHomepagePhoneProducts();
    }else if (productDisplay === "laptop"){
      demo1.verifyHomepageLaptopProducts();
    }else if(productDisplay === "monitor"){
      demo1.verifyHomepageMonitorProducts();
    }else {
      demo1.clickHomeTab(); 
    }
  })

  Then ('I verify products display in the Home page', () => {

          demo1.verifyHomepagePhoneProducts();
          // demo1.verifyProductCountHomePage(); 

    })

    When ('I click Next page Button', () => {
      demo1.clickNextButton();
    })

    Then ('I verify products display in the Next page', () => {
    
    demo1.verifyHomepageLaptopProducts();
    demo1.verifyHomepageMonitorProducts(); 
    // demo1.verifyProductCountNextPage(); 
    }) 

    

    When ('I click Previous page Button', () => {
      demo1.clickPreviousButton();
    })


  