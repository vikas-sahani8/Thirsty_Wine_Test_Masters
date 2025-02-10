import ProductPage from "../../support/pageObjects/ProductPage";

const baseUrl = 'https://pay-pal-pioneers-068.vercel.app';
const productpage = new ProductPage();
beforeEach(() => {
    cy.visit(baseUrl);
    
});

describe('Product Page Tests', () => {
    it('go to the Red wine product page', () => {
        productpage.gotoProductPage();
    });

    it('checking the clicked product is same or not' , () => {
        productpage.gotoProductPage();  
        cy.wait(4000);
        productpage.CheckProduct();
    });

    it('Checking its in stock or not', () => {
        productpage.gotoProductPage();  
        // cy.wait(4000);
        productpage.instock();
    });
})