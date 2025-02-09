import CheckoutPage from "../../support/pageObjects/CheckoutPage";


// Checkout product without Login
const checkoutPage = new CheckoutPage();
const baseUrl = 'https://pay-pal-pioneers-068.vercel.app/';
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('#landing_page_navbar > :nth-child(1)').click()
    });
    describe('Checkout Page Tests', () => {
      
        it('should complete checkout as a new customer', () => {
            checkoutPage.goIntoCheckout();
 
            checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'vikas@gmai.com', 'Looking forward to my order!');
            checkoutPage.submitForm();
            // checkoutPage.verifySuccessMessage();
        });
    
        it('should complete checkout as an existing customer', () => {
            checkoutPage.goIntoCheckout();
            checkoutPage.selectExistingCustomer();
            checkoutPage.fillOutForm('Jane', 'Smith', '0987654321', 'jane.smith@example.com', '');
            checkoutPage.submitForm();
            // checkoutPage.verifySuccessMessage();
        });
    
        it('should display validation error for empty required fields', () => {
            checkoutPage.goIntoCheckout();
            checkoutPage.submitForm();
            checkoutPage.verifyErrorMessage('Please fill out all required fields');
        });
    
        it('should display error for invalid email format', () => {
            checkoutPage.goIntoCheckout();
 
            checkoutPage.fillOutForm('Vikas', 'Sahani', '1234567890', 'invalid-email', 'Looking forward to my order!');
            checkoutPage.submitForm();
    
            checkoutPage.verifyErrorMessage('Invalid email format');
        });
});