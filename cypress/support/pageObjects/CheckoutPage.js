class CheckoutPage {
    get firstNameInput() {
        return cy.get(':nth-child(1) > .chakra-input');
    }

    get lastNameInput() {
        return cy.get(':nth-child(2) > .chakra-input');
    }

    get phoneNumberInput() {
        return cy.get(':nth-child(3) > .chakra-input');
    }

    get emailInput() {
        return cy.get(':nth-child(4) > .chakra-input');
    }

    get messageInput() {
        return cy.get(':nth-child(5) > .chakra-input');
    }

    get newCustomerRadio() {
        return cy.get('label[data-checked=""] > .chakra-radio__control');
    }

    get existingCustomerRadio() {
        return cy.get(':nth-child(2) > .chakra-radio__label');
    }

    get continueButton() {
        return cy.get('.checkout-form > .chakra-button').should('be.visible');
    }

    get errorMessage() {
        return cy.get('[data-test="error-message"]');
    }

    get toastMessage() {
        return cy.get('[id^="toast-"]').should('be.visible');
    }

    get cartIcon() {
        return cy.xpath("//p[@class='landing_page_header_cart']//*[name()='svg']");
    }

    get checkoutButton() {
        return cy.xpath("//button[normalize-space()='Checkout']");
    }

    addToCart() {
        cy.get('.card-container > :nth-child(1) .product-cart-button')
            .should('be.visible')
            .click();
        cy.get('.card-container > :nth-child(4) .product-cart-button')
            .should('be.visible')
            .click();
        this.toastMessage.should('contain.text', 'Product added to cart');
    }

    goToCheckout() {
        this.cartIcon.should('be.visible').click();
        cy.contains('Shopping cart').should('be.visible');
        this.checkoutButton.should('be.visible').click();
    }

    fillOutForm(firstName, lastName, phoneNumber, email, message) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
        this.phoneNumberInput.clear().type(phoneNumber);
        this.emailInput.clear().type(email);
        this.messageInput.clear().type(message);
    }
    loginForm(email, password) {
        cy.get("#field-\:r3\:").type(email);
        cy.xpath("//input[@id='field-:r9:']").type(password);
        cy.xpath("//button[normalize-space()='Login']").click();
    }

    selectExistingCustomer() {
        this.existingCustomerRadio.click();
    }

    submitForm() {
        this.continueButton.click();
    }

    fillAddress(address, city, district, state, pincode) {
        cy.get(':nth-child(1) > :nth-child(1) > .chakra-input').type(address);
        cy.get(':nth-child(2) > :nth-child(1) > .chakra-input').type(city);
        cy.get(':nth-child(2) > :nth-child(2) > .chakra-input').type(district);
        cy.get(':nth-child(3) > :nth-child(1) > .chakra-input').type(state);
        cy.get(':nth-child(3) > :nth-child(2) > .chakra-input').type(pincode);
        cy.get('.checkout-form > .chakra-button').click();
    }

    proceedToPayment() {
        cy.get('.checkout-form .chakra-button').click();
        cy.get('[type="submit"]').click();
    }

    verifyOrderConfirmation() {
        cy.get('.thankyou-details').should('be.visible');
    }

    continueShopping() {
        cy.contains('Continue shopping').click({ force: true });
    }

    verifyErrorMessage(expectedText) {
        this.errorMessage.should('contain', expectedText);
    }
}

export default CheckoutPage;
