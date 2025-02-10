class WishListPage {
    // XPath locator for the product named 'White'
    product  = "//div[normalize-space()='White']";
    
    // CSS selector for the wishlist like (heart) icon
    wishlistLikeIcon = '.card-container > :nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-regular';
    
    // CSS selector for the toast message displayed after an action
    tostMessage = "#chakra-toast-manager-bottom";
    tostMessage1 = "#chakra-toast-manager-bottom"; // This is duplicated; could be reused

    // CSS selector for the wishlist icon after adding a product
    wishlistIcon = (':nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-solid');
    
    /**
     * Attempts to add a product to the wishlist without logging in.
     * Expects to see a 'Login Required.' message.
     */
    toWishListPage() {
        cy.xpath(this.product).click(); // Clicks on the specified product
        cy.get(this.wishlistLikeIcon).click(); // Clicks the wishlist like icon
        cy.get(this.tostMessage).should('be.visible').and('contain.text', 'Login Required.'); // Verifies the toast message
    }

    /**
     * Adds a product to the wishlist after logging in.
     * Expects to see an 'Added to wishlist' message and verifies the wishlist page.
     */
    toWishListPagelogin() {
        cy.xpath(this.product).click(); // Clicks on the specified product
        cy.get(this.wishlistLikeIcon).click(); // Clicks the wishlist like icon
        cy.get(this.tostMessage1).should('be.visible').and('contain.text', 'Added to wishlist'); // Verifies the toast message
        
        cy.get('.landing_page_header_fav > .svg-inline--fa > path').click(); // Navigates to the wishlist page
        cy.get('.wishlist-header').should('be.visible').and('contain.text', 'Your WishList'); // Verifies the wishlist header
        
        cy.get('.wishlist-card').should('be.visible'); // Checks if the wishlist card is visible
        cy.get('.remove-button').click(); // Removes the item from the wishlist
    }
}

// Exports the WishListPage class for use in other test files
export default WishListPage;
