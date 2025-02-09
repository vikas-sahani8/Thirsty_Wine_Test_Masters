class CheckoutPage{
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
        return cy.get(':nth-child(2) > .chakra-radio__control');
    }

    get continueButton() {
        return cy.get('.checkout-form > .chakra-button');
    }


    get errorMessage() {
        return cy.get('[data-test="error-message"]');
    }
    addButton = '.card-container > :nth-child(1) > .product-top-section > .product-price-container > .product-cart-button';
    addToCartButton = '.card-container > :nth-child(4) > .product-top-section > .product-price-container > .product-cart-button';
    toastMessage = '[id^="toast-"]';
    cartIcon = "//p[@class='landing_page_header_cart']//*[name()='svg']";
    shoppingCartText = 'Shopping cart';
    checkoutButton = "//button[normalize-space()='Checkout']"

    addToCart(){
        
        cy.get(this.addButton).should('be.visible').click()
        cy.get(this.addToCartButton).should('be.visible').click()
        cy.get(this.toastMessage).should('be.visible').and('contain.text', 'Product added to cart')
        
    }

    goIntoCheckout(){
        cy.xpath(this.cartIcon).should('be.visible').click()
        cy.contains(this.shoppingCartText).should('be.visible')
        cy.xpath(this.checkoutButton).should('be.visible').click()

    }

    fillOutForm(firstName, lastName, phoneNumber, email, message) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
        this.phoneNumberInput.clear().type(phoneNumber);
        this.emailInput.clear().type(email);
        this.messageInput.clear().type(message);
    }

     

    selectExistingCustomer() {
        this.existingCustomerRadio.check();
    }

    submitForm() {
        this.continueButton.click();
    }

    verifySuccessMessage() {
        this.successMessage.should('be.visible');
    }

    verifyErrorMessage(expectedText) {
        this.errorMessage.should('contain', expectedText);
    }
}

export default CheckoutPage; 