import CheckoutPage from "../../support/pageObjects/CheckoutPage";
import LoginPage from "../../support/pageObjects/LoginPage";

// Creating instances of CheckoutPage and LoginPage classes
const checkoutPage = new CheckoutPage();
const loginPage = new LoginPage();
const baseUrl = 'https://pay-pal-pioneers-068.vercel.app/';

// Test suite for verifying the checkout page functionality
describe('Checkout Page Tests', () => {
    
    beforeEach(() => {
        // Visiting the base URL before each test to ensure a fresh session
        cy.visit(baseUrl);
        
        // Clicking on the first navigation item to open the product catalog
        cy.get('#landing_page_navbar > :nth-child(1)').click();
    });

    it('should add a product to the cart', () => {
        // Adding a product to the cart
        checkoutPage.addToCart();
        
        // Verifying that a toast message appears confirming the product was added to the cart
        cy.get('[id^="toast-"]').should('contain.text', 'Product added to cart');
    });

    it('should complete checkout as a new customer', () => {
        // Navigating to the checkout page
        checkoutPage.goToCheckout();
        
        // Filling out the checkout form with new customer details
        checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'vikas@gmail.com', 'Looking forward to my order!');
        
        // Submitting the checkout form
        checkoutPage.submitForm();
        
        // Filling out the shipping address details
        checkoutPage.fillAddress('1234', 'Bangalore', 'Bangalore', 'Karnataka', '560001');
        
        // Proceeding to the payment step
        checkoutPage.proceedToPayment();
        
        // Verifying that the order confirmation page appears
        checkoutPage.verifyOrderConfirmation();
        
        // Continuing shopping after placing the order
        checkoutPage.continueShopping();
    });

    it('should complete checkout as an existing customer', () => {
        // Navigating to the checkout page
        checkoutPage.goToCheckout();
        
        // Selecting the existing customer option
        checkoutPage.selectExistingCustomer();
        
        // Logging in with existing credentials
        loginPage.login('vikas@gmail.com', '12345');
        
        // Navigating back to the checkout page
        checkoutPage.goToCheckout();
        
        // Filling out the checkout form again
        checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'vikas@gmail.com', 'Looking forward to my order!');
        
        // Submitting the form
        checkoutPage.submitForm();
        
        // Filling out a different shipping address
        checkoutPage.fillAddress('5678', 'Mumbai', 'Mumbai', 'Maharashtra', '400001');
        
        // Proceeding to payment step
        checkoutPage.proceedToPayment();
        
        // Verifying that the order confirmation page appears
        checkoutPage.verifyOrderConfirmation();
        
        // Continuing shopping after placing the order
        checkoutPage.continueShopping();
    });

    it('should display an error when required fields are missing', () => {
        // Navigating to the checkout page
        checkoutPage.goToCheckout();
        
        // Attempting to submit the form without filling required fields
        checkoutPage.submitForm();
        
        // Verifying that an appropriate validation message is displayed for an invalid email input
        cy.get('[type="email"]').then(($el) => {
            expect($el[0].validationMessage).to.eq("Please include an '@' in the email address. 'invalid-email' is missing an '@'.");
        });
    });

    it('should display an error for invalid email', () => {
        // Navigating to the checkout page
        checkoutPage.goToCheckout();
        
        // Filling the checkout form with an invalid email format
        checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'invalid-email', 'Looking forward to my order!');
        
        // Submitting the form
        checkoutPage.submitForm();
        
        // Verifying that an error message appears for the invalid email
        cy.get('[data-test="error-message"]').should('be.visible');
    });
});