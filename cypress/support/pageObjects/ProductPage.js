class ProductPage {

    // Method to navigate to a product page
    gotoProductPage() {
        // Click on the first navigation item in the landing page navbar
        cy.get('#landing_page_navbar > :nth-child(1)').click({ multiple: true });
        
        // Click on the first product card to open the product details page
        cy.get('.card-container > :nth-child(1)').click();
    }

    // Method to verify that the correct product page is displayed
    CheckProduct() {
        // Assert that the product title is visible and contains the expected product name
        cy.get('.product-page-head > h1')
            .should('be.visible')
            .and('contain.text', 'Riesling Trocken, 0,75L');
    }

    // Method to verify if the product is in stock
    instock() {
        // Assert that the stock status message is visible and confirms availability
        cy.get('.productpage-instock')
            .should('be.visible')
            .and('contain.text', 'In stock');
    }
}

export default ProductPage;