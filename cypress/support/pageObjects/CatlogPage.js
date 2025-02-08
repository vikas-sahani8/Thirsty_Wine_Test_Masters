class CatlogPage{
    //sidebar of the catalog page
    get categoryTitle() { return 'h2.sidebar-title'; }
    get categoryOptions() { return 'label.sidebar-label-container input[name="test"]'; }
    get priceTitle() { return 'h2.price-title'; }
    get priceOptions() { return 'label.sidebar-label-container input[name="price"]'; }
    get colorTitle() { return 'h2.color-title'; }
    get colorOptions() { return 'label.sidebar-label-container input[name="test1"]'; }

    selectCategory(value) {
        cy.get(this.categoryOptions).filter(`[value="${value}"]`).check();
    }

    selectPrice(value) {
        cy.get(this.priceOptions).filter(`[value="${value}"]`).check();
    }

    selectColor(value) {
        cy.get(this.colorOptions).filter(`[value="${value}"]`).check();
    }

    verifyCategorySelected(value) {
        cy.get(this.categoryOptions).filter(`[value="${value}"]`).should('be.checked');
    }

    verifyPriceSelected(value) {
        cy.get(this.priceOptions).filter(`[value="${value}"]`).should('be.checked');
    }

    verifyColorSelected(value) {
        cy.get(this.colorOptions).filter(`[value="${value}"]`).should('be.checked');
    }

    //main content of the catalog page
    get recommendedTitle() {
        return cy.get('.recommended-title');
    }

    get allProductsButton() {
        return cy.get('button.btns').contains('All Products');
    }

    get productImages() {
        return cy.get('.product-image');
    }

    addButton = '.card-container > :nth-child(1) > .product-top-section > .product-price-container > .product-cart-button';
    addToCartButton = '.card-container > :nth-child(4) > .product-top-section > .product-price-container > .product-cart-button';
    toastMessage = '[id^="toast-"]';
    cartIcon = "//p[@class='landing_page_header_cart']//*[name()='svg']";
    shoppingCartText = 'Shopping cart';

    // Methods
    clickAddButton() {
        cy.get(this.addButton).should('be.visible').click();
    }

    clickAddToCart() {
        cy.get(this.addToCartButton).should('be.visible').click();
    }

    verifyToastMessage() {
        cy.get(this.toastMessage).should('be.visible').and('contain.text', 'Product added to cart');
    }

    openCart() {
        cy.xpath(this.cartIcon).should('be.visible').click();
    }

    verifyShoppingCart() {
        cy.contains(this.shoppingCartText).should('be.visible');
    }

    clickAllProducts() {
        this.allProductsButton.click();
    }

    verifyRecommendedTitle() {
        this.recommendedTitle.should('be.visible').and('contain', 'Recommended');
    }


}
export default CatlogPage;