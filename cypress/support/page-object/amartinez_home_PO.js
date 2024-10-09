/// <reference types="cypress" />

class amartinez_home_PO {
 constructor() {
    //homepage
  this.homepage = "https://www.demoblaze.com/index.html";

  this.category = "#cat"; 
  this.catPhones = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)";
  this.catLaptops = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)";
  this.catMonitors = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)";

  this.products = "#tbodyid";



  this.nextButton = "#next2";
  this.previousButton = "#prev2"; 

  this.carousel = ".carousel-item.active";

  this.contact = ".nav-link[data-toggle='modal'][data-target='#exampleModal']";
  this.aboutUs = "a[data-target='#videoModal']"; 
  this.cart = "#cartur";
  this.logIn = "#login2";
  this.signUp = "#signin2";
  this.homePageTab = "li[class='nav-item active'] a[class='nav-link']"; 

//Contact modal
  this.newMessageModal = "#exampleModalLabel"; 
  this.newMessageModalClose = "div[id='exampleModal'] div[class='modal-footer'] button:nth-child(1)"; 
//About Us modal
  this.videoModal = "#videoModalLabel"; 
  this.videoModalClose = "div[id='videoModal'] div[class='modal-footer'] button[type='button']"; 
//Log In modal
  this.logInModal = "#logInModalLabel"; 
  this.logInModalClose = "div[id='logInModal'] div[class='modal-footer'] button:nth-child(1)";
//Sign Up Modal
  this.signInModal = "#signInModalLabel";
  this.signInModalClose = "div[id='signInModal'] div[class='modal-footer'] button:nth-child(1)"; 


  this.addToCartButton = ".btn.btn-success.btn-lg";


 }

 openHomepage(){
    cy.visit(this.homepage);
    cy.wait(600);
  }

 verifyCarousel() {
    cy.get(this.carousel).should("be.visible");
 }

 clickHomeTab(){
    cy.get(this.homePageTab).click();

 }

 clickContactTab(){
    cy.get(this.contact).click();

 }

 clickAboutUsTab(){
    cy.get(this.aboutUs).click();

 }

 clickLogInTab(){
    cy.get(this.logIn).click();
 }

 clickSignUpTab(){
    cy.get(this.signUp).click();
 }

 verifyNewMessageModal(){
    cy.get(this.newMessageModal).should("exist"); 
    cy.wait(200);
    // cy.get(this.newMessageModalClose).click(); 
    cy.visit(this.homepage);
 }

 verifyAboutUsVideo(){
    cy.get(this.videoModal).should("exist"); 
    cy.wait(200);
    //cy.get(this.videoModalClose).click(); 
    cy.visit(this.homepage);
 }

 verifyLogInModal(){
    cy.get(this.logInModal).should("exist"); 
    cy.wait(200);
    //cy.get(this.logInModalClose).click(); 
    cy.visit(this.homepage);
 }

 verifySignUpModal(){
    cy.get(this.signUp).should("exist"); 
    cy.wait(200);
    //cy.get(this.signUpModalClose).click(); 
    cy.visit(this.homepage);
 }


  clickCategoryPhone(){
    cy.get(this.category).click(); 
    
  }

  clickCategoryLaptop(){
    cy.get(this.catLaptops).click(); 
  }

  clickCategoryMonitor(){
    cy.get(this.catMonitors).click(); 
  }

  clickNextButton(){
   cy.get(this.nextButton).click(); 
  }

  clickPreviousButton(){
   cy.get(this.previousButton).click(); 
  }

verifyProductCountHomePage(){
   cy.get('#tbodyid').should(($div) =>{
      expect($div).to.have.length(9)
   })
}

verifyProductCountNextPage(){
   cy.get("#tbodyid").should(($div) =>{
      expect($div).to.have.length(6)
   })
}

  verifyHomepagePhoneProducts(){
    cy.get(this.products).contains("s7"); 
    cy.get(this.products).contains("650");
    cy.get(this.products).contains("Qualcomm");
}

verifyHomepageLaptopProducts(){
    cy.get(this.products).contains("Dell"); 
    cy.get(this.products).contains("700");
    cy.get(this.products).contains("Turbo Boost up to 2.7GHz");
}

verifyHomepageMonitorProducts(){
    cy.get(this.products).contains("MacBook Pro"); 
    cy.get(this.products).contains("1100");
    cy.get(this.products).contains("VS247H-P 23.6- Inch");
}


}


export default amartinez_home_PO;