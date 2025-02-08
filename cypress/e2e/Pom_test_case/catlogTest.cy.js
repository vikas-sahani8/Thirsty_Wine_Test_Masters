 import CatlogPage from '../../support/pageObjects/CatlogPage';
const catlogItems = new CatlogPage();
 

const baseUrl = 'https://pay-pal-pioneers-068.vercel.app';
beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('#landing_page_navbar > :nth-child(1)').click()
     
});

describe('Catalog sidebar', () => {
    it('should select All category', () => {
        catlogItems.selectCategory(''); // All
        catlogItems.verifyCategorySelected('');
    });
    
    it('should select White wine category', () => {
        catlogItems.selectCategory('White wine');
        catlogItems.verifyCategorySelected('White wine');
    });
    
    it('should select Red wine category', () => {
        catlogItems.selectCategory('Red wine');
        catlogItems.verifyCategorySelected('Red wine');
    });
    
    it('should select Rose wine category', () => {
        catlogItems.selectCategory('Rose wine');
        catlogItems.verifyCategorySelected('Rose wine');
    });
    
    it('should select Wine sets category', () => {
        catlogItems.selectCategory('Wine sets');
        catlogItems.verifyCategorySelected('Wine sets');
    });
    
    it('should select All price range', () => {
        catlogItems.selectPrice('');
        catlogItems.verifyPriceSelected('');
    });
    
    it('should select $0 - $50 price range', () => {
        catlogItems.selectPrice('0-50');
        catlogItems.verifyPriceSelected('0-50');
    });
    
    it('should select $50 - $100 price range', () => {
        catlogItems.selectPrice('50-100');
        catlogItems.verifyPriceSelected('50-100');
    });
    
    it('should select $100 - $150 price range', () => {
        catlogItems.selectPrice('100-150');
        catlogItems.verifyPriceSelected('100-150');
    });
    
    it('should select Over $150 price range', () => {
        catlogItems.selectPrice('150-');
        catlogItems.verifyPriceSelected('150-');
    });
    
    it('should select All colors', () => {
        catlogItems.selectColor('');
        catlogItems.verifyColorSelected('');
    });
    
    it('should select Sparkling color', () => {
        catlogItems.selectColor('Sparkling');
        catlogItems.verifyColorSelected('Sparkling');
    });
    
    it('should select Red color', () => {
        catlogItems.selectColor('Red');
        catlogItems.verifyColorSelected('Red');
    });
    
    it('should select White color', () => {
        catlogItems.selectColor('White');
        catlogItems.verifyColorSelected('White');
    });

})

//manin content of the catalog page

describe.only('Catalog main content', () => {
    it('should display the recommended title', () => {
        catlogItems.verifyRecommendedTitle();
    });

    it('should click the all products button', () => {
        catlogItems.clickAllProducts();
        cy.url().should('contain', 'catlog');
    });
    it('should display product images', () => {
        catlogItems.productImages.should('have.length.greaterThan', 0);
    });
    it('should display like button', () => {
        cy.xpath("//div[@class='product-icon']").should('be.visible');
    });
    it('should display add button', () => {
        cy.xpath("//span[contains(text(),'+')]").should('be.visible');
    });
    it.only('should add a product to the cart and verify', () => {
        catlogItems.clickAddButton();
        catlogItems.clickAddToCart();
        catlogItems.verifyToastMessage();
        catlogItems.openCart();
        catlogItems.verifyShoppingCart();
        cy.get('[style="display: flex; justify-content: flex-end; align-items: flex-start; width: 100%;"] > div > .fa-solid').click();
        cy.get('.card-container > :nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-regular').click();
    });


     
})
