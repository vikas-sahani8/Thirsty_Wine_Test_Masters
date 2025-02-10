class ProductPage{

    gotoProductPage(){
        cy.get('#landing_page_navbar > :nth-child(1)').click({ multiple: true });
        cy.get('.card-container > :nth-child(1)').click();
    }

    CheckProduct(){
        cy.get('.product-page-head > h1').should('be.visible').and('contain.text', 'Riesling Trocken, 0,75L');
    }

    instock(){
        cy.get('.productpage-instock').should('be.visible').and('contain.text', 'In stock');
    }

}

export default ProductPage;                       