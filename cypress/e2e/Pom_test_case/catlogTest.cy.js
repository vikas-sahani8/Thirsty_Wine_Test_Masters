import CatlogPage from '../../support/pageObjects/CatlogPage';

// Creating an instance of the CatlogPage class to interact with catalog elements
const catlogItems = new CatlogPage();
const baseUrl = 'https://pay-pal-pioneers-068.vercel.app';

beforeEach(() => {
    // Visiting the base URL before each test to ensure a fresh session
    cy.visit(baseUrl);
    
    // Clicking on the first navigation item to open the catalog page
    cy.get('#landing_page_navbar > :nth-child(1)').click();
});

// Test suite for verifying the catalog sidebar functionality
describe('Catalog sidebar', () => {
    it('should select All category', () => {
        // Selecting the "All" category and verifying the selection
        catlogItems.selectCategory('');
        catlogItems.verifyCategorySelected('');
    });
    
    it('should select White wine category', () => {
        // Selecting "White wine" category and verifying the selection
        catlogItems.selectCategory('White wine');
        catlogItems.verifyCategorySelected('White wine');
    });
    
    it('should select Red wine category', () => {
        // Selecting "Red wine" category and verifying the selection
        catlogItems.selectCategory('Red wine');
        catlogItems.verifyCategorySelected('Red wine');
    });
    
    it('should select Rose wine category', () => {
        // Selecting "Rose wine" category and verifying the selection
        catlogItems.selectCategory('Rose wine');
        catlogItems.verifyCategorySelected('Rose wine');
    });
    
    it('should select Wine sets category', () => {
        // Selecting "Wine sets" category and verifying the selection
        catlogItems.selectCategory('Wine sets');
        catlogItems.verifyCategorySelected('Wine sets');
    });
    
    it('should select All price range', () => {
        // Selecting all price ranges and verifying the selection
        catlogItems.selectPrice('');
        catlogItems.verifyPriceSelected('');
    });
    
    it('should select $0 - $50 price range', () => {
        // Selecting the price range $0 - $50 and verifying the selection
        catlogItems.selectPrice('0-50');
        catlogItems.verifyPriceSelected('0-50');
    });
    
    it('should select $50 - $100 price range', () => {
        // Selecting the price range $50 - $100 and verifying the selection
        catlogItems.selectPrice('50-100');
        catlogItems.verifyPriceSelected('50-100');
    });
    
    it('should select $100 - $150 price range', () => {
        // Selecting the price range $100 - $150 and verifying the selection
        catlogItems.selectPrice('100-150');
        catlogItems.verifyPriceSelected('100-150');
    });
    
    it('should select Over $150 price range', () => {
        // Selecting the price range Over $150 and verifying the selection
        catlogItems.selectPrice('150-');
        catlogItems.verifyPriceSelected('150-');
    });
    
    it('should select All colors', () => {
        // Selecting all color options and verifying the selection
        catlogItems.selectColor('');
        catlogItems.verifyColorSelected('');
    });
    
    it('should select Sparkling color', () => {
        // Selecting "Sparkling" color and verifying the selection
        catlogItems.selectColor('Sparkling');
        catlogItems.verifyColorSelected('Sparkling');
    });
    
    it('should select Red color', () => {
        // Selecting "Red" color and verifying the selection
        catlogItems.selectColor('Red');
        catlogItems.verifyColorSelected('Red');
    });
    
    it('should select White color', () => {
        // Selecting "White" color and verifying the selection
        catlogItems.selectColor('White');
        catlogItems.verifyColorSelected('White');
    });
});

// Test suite for verifying the main content of the catalog page
describe.only('Catalog main content', () => {
    it('should display the recommended title', () => {
        // Verifying that the recommended products section title is displayed
        catlogItems.verifyRecommendedTitle();
    });

    it('should click the all products button', () => {
        // Clicking the "All Products" button to navigate to the catalog page
        catlogItems.clickAllProducts();
        
        // Verifying that the URL contains "catalog" to confirm navigation
        cy.url().should('contain', 'catlog');
    });

    it('should display product images', () => {
        // Ensuring that product images are visible and have more than zero items
        catlogItems.productImages.should('have.length.greaterThan', 0);
    });

    it('should display like button', () => {
        // Verifying that the like button (heart icon) is visible for products
        cy.xpath("//div[@class='product-icon']").should('be.visible');
    });

    it('should display add button', () => {
        // Checking the visibility of the add button for adding products to the cart
        cy.xpath("//span[contains(text(),'+')]").should('be.visible');
    });

    it.only('should add a product to the cart and verify', () => {
        // Clicking on the add button for a product
        catlogItems.clickAddButton();
        
        // Clicking on "Add to Cart" button
        catlogItems.clickAddToCart();
        
        // Verifying that the success toast message appears
        catlogItems.verifyToastMessage();
        
        // Opening the shopping cart to check if the product was added
        catlogItems.openCart();
        catlogItems.verifyShoppingCart();
        
        // Closing the cart popup
        cy.get('[style="display: flex; justify-content: flex-end; align-items: flex-start; width: 100%;"] > div > .fa-solid').click();
        
        // Clicking the like button to add the product to the wishlist
        cy.get('.card-container > :nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-regular').click();
    });
});