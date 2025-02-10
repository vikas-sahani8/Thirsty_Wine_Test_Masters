class CheckoutPage {
    // Locators for input fields in the checkout form
    get firstNameInput() {
        return cy.get(':nth-child(1) > .chakra-input'); // First Name input field
    }

    get lastNameInput() {
        return cy.get(':nth-child(2) > .chakra-input'); // Last Name input field
    }

    get phoneNumberInput() {
        return cy.get(':nth-child(3) > .chakra-input'); // Phone Number input field
    }

    get emailInput() {
        return cy.get(':nth-child(4) > .chakra-input'); // Email input field
    }

    get messageInput() {
        return cy.get(':nth-child(5) > .chakra-input'); // Message input field
    }

    // Locators for customer selection radio buttons
    get newCustomerRadio() {
        return cy.get('label[data-checked=""] > .chakra-radio__control'); // New Customer radio button
    }

    get existingCustomerRadio() {
        return cy.get(':nth-child(2) > .chakra-radio__label'); // Existing Customer radio button
    }

    // Locators for buttons
    get continueButton() {
        return cy.get('.checkout-form > .chakra-button').should('be.visible'); // Continue button in checkout form
    }

    get checkoutButton() {
        return cy.xpath("//button[normalize-space()='Checkout']"); // Checkout button
    }

    // Locators for error messages
    get errorMessage() {
        return cy.get('[data-test="error-message"]'); // Error message container
    }

    get toastMessage() {
        return cy.get('[id^="toast-"]').should('be.visible'); // Toast message after adding to cart
    }

    // Locator for shopping cart icon
    get cartIcon() {
        return cy.xpath("//p[@class='landing_page_header_cart']//*[name()='svg']");
    }

    // Method to add a product to the cart
    addToCart() {
        cy.get('.card-container > :nth-child(1) .product-cart-button')
            .should('be.visible')
            .click();
        cy.get('.card-container > :nth-child(4) .product-cart-button')
            .should('be.visible')
            .click();
        this.toastMessage.should('contain.text', 'Product added to cart');
    }

    // Method to navigate to the checkout page
    goToCheckout() {
        this.cartIcon.should('be.visible').click();
        cy.contains('Shopping cart').should('be.visible');
        this.checkoutButton.should('be.visible').click();
    }

    // Method to fill out the checkout form
    fillOutForm(firstName, lastName, phoneNumber, email, message) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
        this.phoneNumberInput.clear().type(phoneNumber);
        this.emailInput.clear().type(email);
        this.messageInput.clear().type(message);
    }

    // Method to log in during checkout
    loginForm(email, password) {
        cy.get("#field-\:r3\:").type(email); // Email input field
        cy.xpath("//input[@id='field-:r9:']").type(password); // Password input field
        cy.xpath("//button[normalize-space()='Login']").click(); // Login button
    }

    // Method to select existing customer option
    selectExistingCustomer() {
        this.existingCustomerRadio.click();
    }

    // Method to submit the checkout form
    submitForm() {
        this.continueButton.click();
    }

    // Method to fill the shipping address details
    fillAddress(address, city, district, state, pincode) {
        cy.get(':nth-child(1) > :nth-child(1) > .chakra-input').type(address);
        cy.get(':nth-child(2) > :nth-child(1) > .chakra-input').type(city);
        cy.get(':nth-child(2) > :nth-child(2) > .chakra-input').type(district);
        cy.get(':nth-child(3) > :nth-child(1) > .chakra-input').type(state);
        cy.get(':nth-child(3) > :nth-child(2) > .chakra-input').type(pincode);
        cy.get('.checkout-form > .chakra-button').click();
    }

    // Method to proceed to payment
    proceedToPayment() {
        cy.get('.checkout-form .chakra-button').click();
        cy.get('[type="submit"]').click();
    }

    // Method to verify order confirmation page
    verifyOrderConfirmation() {
        cy.get('.thankyou-details').should('be.visible');
    }

    // Method to continue shopping after placing an order
    continueShopping() {
        cy.contains('Continue shopping').click({ force: true });
    }

    // Method to verify an error message
    verifyErrorMessage(expectedText) {
        this.errorMessage.should('contain', expectedText);
    }
}

export default CheckoutPage;
