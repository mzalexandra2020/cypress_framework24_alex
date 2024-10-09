/// <reference types="cypress" />


class amartinez_cart_PO {

constructor() {
  this.validUser = "#nameofuser"; 
  this.logoutButton = "#logout2";

  this.cardTitle = ".card-title";

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
  this.purchaseConfirmation = ".lead.text-muted";


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

   
    clickProduct(product) {
      cy.contains(this.cardtitle, product).click();
      cy.wait(1000);
  }

   

    addProductToCart(){
      cy.get(this.addToCartButton).click(); 
      cy.get(this.cart).click();
      cy.wait(600);
    }

    itemInCart(product){
      cy.get(this.placeOrderButton).should("exist"); 
      cy.get(this.totalAmount).should("exist"); 
      // cy.fixture('amartinez.json').then((data) => {
      //   cy.get("div[id='more-information'] strong").should('eq',data.productName["samsung"]); 
      //   cy.get("div[id='more-information'] strong").should('eq',data.productPrice["360"]); 
      //   cy.get("div[id='more-information'] strong").should('eq',data.productDescription["samsung"]); 
      // })
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
  
  export default amartinez_cart_PO;