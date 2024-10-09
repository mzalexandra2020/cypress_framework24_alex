/// <reference types="cypress" />


class amartinez_PO {

constructor() {
  this.validUser = "#nameofuser"; 
  this.logoutButton = "#logout2";

  //homepage
  this.homepage = "https://www.demoblaze.com/index.html";
  this.catPhones = "a[onclick='byCat('phone')']";
  this.productS6 = "#tbodyid > div:nth-child(1) > div > div > h4 > a";

  this.addToCartButton = ".btn.btn-success.btn-lg";

  //cart page
  this.cart = "#cartur"; 

  this.placeOrderButton = ".btn.btn-success"; 
  this.totalAmount = "#totalp";
  
  //place order Modal 
  this.placeOrderModal = "#orderModalLabel"; 
  this.placeOrderName = "#name";
  this.placeOrderCountry = "#country"; 
  this.placeOrderCity = "#city"; 
  this.placeOrderCC = "#card";
  this.placeOrderMonth = "#month"; 
  this.placeOrderYear = "#year";
  this.placeOrderPurchaseButton = "button[onclick='purchaseOrder()']"; 

  //confirmation
  this.purchaseConfirmation = "body > div:nth-child(21)";


}
 

    loginValid() {
      cy.fixture('amartinez.json').then((data) => {
        cy.visit(data.baseUrl);
        cy.get("#login2").click();
        cy.get("#loginusername").type(data.username);
        cy.get("#loginpassword").type(data.password);
        cy.get(
          "button[onclick='logIn()']"
        ).click();
      });
    }

    // loginValidation() {
    //   cy.get(this.validUser).should("exist").should("eql", {username: "billyjoebob"});
    //   cy.get(this.logoutButton).should("be.visible"); 
    // }

    openHomepage(){
      cy.visit(this.homepage);
      cy.wait(600);
    }

    clickProduct(){
      cy.get(this.productS6).click(); 
    }

    clickCategoryPhones(){
      cy.get(this.catPhones).click(); 
    }

    addProductToCart(){
      cy.get(this.addToCartButton).click(); 
      cy.get(this.cart).click();
      cy.wait(600);
    }

    itemInCart(){
      cy.get(this.placeOrderButton).should("exist"); 
      cy.get(this.totalAmount).should("exist"); 
    }

    placeOrder(){
      cy.get(this.placeOrderButton).click(); 
    }

    filloutPlaceOrderModal(){
      cy.get(this.placeOrderModal).should("be.visible");
      cy.get(this.placeOrderName).type("Alex Martini");
      cy.get(this.placeOrderCountry).type("USA");
      cy.get(this.placeOrderCity).type("San Antonio");
      cy.get(this.placeOrderCC).type("4444444444444444");
      cy.get(this.placeOrderMonth).type("12"); 
      cy.get(this.placeOrderYear).type("2027"); 
      cy.get(this.placeOrderPurchaseButton).click();
    }

    confirmPurchase(){
      cy.get(this.purchaseConfirmation).should("be.visible");
      
    }



    
  }
  
  export default amartinez_PO;