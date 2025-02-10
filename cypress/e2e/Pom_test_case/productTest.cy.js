import ProductPage from "../../support/pageObjects/ProductPage";

// Defining the base URL for the e-commerce platform
const baseUrl = 'https://pay-pal-pioneers-068.vercel.app';

// Creating an instance of the ProductPage class to interact with product-related elements
const productpage = new ProductPage();

beforeEach(() => {
    // Visiting the base URL before each test to ensure a fresh session
    cy.visit(baseUrl);
});

// Test suite for verifying product page functionality
describe('Product Page Tests', () => {
    
    it('go to the Red wine product page', () => {
        // Navigating to the product page for Red wine
        productpage.gotoProductPage();
    });

    it('checking the clicked product is same or not', () => {
        // Navigating to the product page
        productpage.gotoProductPage();  
        
        // Waiting for the product page to fully load before verification
        cy.wait(4000);
        
        // Checking if the selected product matches the expected product
        productpage.CheckProduct();
    });

    it('Checking if the product is in stock', () => {
        // Navigating to the product page
        productpage.gotoProductPage();  
        
        // Checking whether the product is available in stock
        productpage.instock();
    });
});
