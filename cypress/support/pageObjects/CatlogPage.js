class CatlogPage {
    // Sidebar elements of the catalog page
    get categoryTitle() { return 'h2.sidebar-title'; } // Locator for category title in sidebar
    get categoryOptions() { return 'label.sidebar-label-container input[name="test"]'; } // Locator for category options
    get priceTitle() { return 'h2.price-title'; } // Locator for price section title
    get priceOptions() { return 'label.sidebar-label-container input[name="price"]'; } // Locator for price options
    get colorTitle() { return 'h2.color-title'; } // Locator for color section title
    get colorOptions() { return 'label.sidebar-label-container input[name="test1"]'; } // Locator for color options

    // Method to select a specific category filter
    selectCategory(value) {
        cy.get(this.categoryOptions).filter(`[value="${value}"]`).check();
    }

    // Method to select a specific price range filter
    selectPrice(value) {
        cy.get(this.priceOptions).filter(`[value="${value}"]`).check();
    }

    // Method to select a specific color filter
    selectColor(value) {
        cy.get(this.colorOptions).filter(`[value="${value}"]`).check();
    }

    // Method to verify the selected category filter
    verifyCategorySelected(value) {
        cy.get(this.categoryOptions).filter(`[value="${value}"]`).should('be.checked');
    }

    // Method to verify the selected price filter
    verifyPriceSelected(value) {
        cy.get(this.priceOptions).filter(`[value="${value}"]`).should('be.checked');
    }

    // Method to verify the selected color filter
    verifyColorSelected(value) {
        cy.get(this.colorOptions).filter(`[value="${value}"]`).should('be.checked');
    }

    // Main content elements of the catalog page
    get recommendedTitle() {
        return cy.get('.recommended-title'); // Locator for recommended title section
    }

    get allProductsButton() {
        return cy.get('button.btns').contains('All Products'); // Locator for 'All Products' button
    }

    get productImages() {
        return cy.get('.product-image'); // Locator for product images
    }

    // Locators for adding products to cart
    addButton = '.card-container > :nth-child(1) > .product-top-section > .product-price-container > .product-cart-button'; // Add button for first product
    addToCartButton = '.card-container > :nth-child(4) > .product-top-section > .product-price-container > .product-cart-button'; // Add button for fourth product
    toastMessage = '[id^="toast-"]'; // Locator for toast message
    cartIcon = "//p[@class='landing_page_header_cart']//*[name()='svg']"; // XPath for cart icon
    shoppingCartText = 'Shopping cart'; // Text used to verify shopping cart visibility

    // Method to click the add button for the first product
    clickAddButton() {
        cy.get(this.addButton).should('be.visible').click();
    }

    // Method to click the add to cart button for the fourth product
    clickAddToCart() {
        cy.get(this.addToCartButton).should('be.visible').click();
    }

    // Method to verify the toast message after adding a product to the cart
    verifyToastMessage() {
        cy.get(this.toastMessage).should('be.visible').and('contain.text', 'Product added to cart');
    }

    // Method to open the shopping cart
    openCart() {
        cy.xpath(this.cartIcon).should('be.visible').click();
    }

    // Method to verify that the shopping cart is displayed
    verifyShoppingCart() {
        cy.contains(this.shoppingCartText).should('be.visible');
    }

    // Method to click on the 'All Products' button
    clickAllProducts() {
        this.allProductsButton.click();
    }

    // Method to verify that the 'Recommended' section is visible
    verifyRecommendedTitle() {
        this.recommendedTitle.should('be.visible').and('contain', 'Recommended');
    }
}

export default CatlogPage;
