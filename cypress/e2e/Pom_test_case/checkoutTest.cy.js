import CheckoutPage from "../../support/pageObjects/CheckoutPage";
import LoginPage from "../../support/pageObjects/LoginPage";

const checkoutPage = new CheckoutPage();
const loginPage = new LoginPage();
const baseUrl = 'https://pay-pal-pioneers-068.vercel.app/';

describe('Checkout Page Tests', () => {
    
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('#landing_page_navbar > :nth-child(1)').click();
    });

    it('should add a product to the cart', () => {
        checkoutPage.addToCart();
        cy.get('[id^="toast-"]').should('contain.text', 'Product added to cart');
    });

    it('should complete checkout as a new customer', () => {
        checkoutPage.goToCheckout();
        checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'vikas@gmail.com', 'Looking forward to my order!');
        checkoutPage.submitForm();
        checkoutPage.fillAddress('1234', 'Bangalore', 'Bangalore', 'Karnataka', '560001');
        checkoutPage.proceedToPayment();
        checkoutPage.verifyOrderConfirmation();
        checkoutPage.continueShopping();
    });

    it('should complete checkout as an existing customer', () => {
        checkoutPage.goToCheckout();
        checkoutPage.selectExistingCustomer();
        loginPage.login('vikas@gmail.com', '12345');
        checkoutPage.goToCheckout();
        checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'vikas@gmail.com', 'Looking forward to my order!');
        checkoutPage.submitForm();
        checkoutPage.fillAddress('5678', 'Mumbai', 'Mumbai', 'Maharashtra', '400001');
        checkoutPage.proceedToPayment();
        checkoutPage.verifyOrderConfirmation();
        checkoutPage.continueShopping();
    });

    it('should display an error when required fields are missing', () => {
        checkoutPage.goToCheckout();
        checkoutPage.submitForm();  // Try submitting an empty form
        cy.get('[type="email"]').then(($el) => {
            expect($el[0].validationMessage).to.eq("Please include an '@' in the email address. 'invalid-email' is missing an '@'.");
        });
    });

    it('should display an error for invalid email', () => {
        checkoutPage.goToCheckout();
        checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'invalid-email', 'Looking forward to my order!');
        checkoutPage.submitForm();
        cy.get('[data-test="error-message"]').should('be.visible') ;
    });

});
