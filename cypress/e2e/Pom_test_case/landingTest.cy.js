import LandingPage from "../../support/pageObjects/LandingPage";

// Test suite for verifying the landing page functionality
describe('Landing Page Tests', () => {
    // Creating an instance of the LandingPage class to interact with elements
    const landingPage = new LandingPage();

    beforeEach(() => {
        // Visiting the landing page before each test to ensure a fresh state
        landingPage.visit();
    });

    it('should display the logo', () => {
        // Verifying that the website logo is visible on the landing page
        cy.get('.landing_page_header_logo').should('be.visible');
    });

    it('should allow searching for wine', () => {
        // Typing a wine name in the search bar
        cy.get('.landing_page_header_search').type('Chardonnay');
        
        // Clicking the search button to initiate the search
        cy.get('.landing_page_header_search_btn').click();
        
        // Verifying that search results are displayed correctly
        landingPage.setAndGiftsTitleOnHomePage();
    });

    it('should open the login dropdown when clicked', () => {
        // Clicking on the login button in the header
        cy.get('.landing_page_header_login').click({ force: true });
        
        // Verifying that the login dropdown appears
        cy.get('.landing_page_header_icons_login_dropdown').should('be.visible');
        
        // Checking the header section after login dropdown opens
        landingPage.headerSection();
    });

    it('should open the cart when clicked', () => {
        // Clicking the cart icon in the header
        cy.get('.landing_page_header_cart').click();
        
        // Verifying that the shopping cart section is displayed
        cy.get('.cart-title').should('contain', 'Shopping cart');
    });

    it('should display product cards', () => {
        // Ensuring that product cards are available on the landing page
        cy.get('.product-card-container').should('have.length.greaterThan', 0);
        
        // Checking additional sections on the home page
        landingPage.whatWouldYouLikeSection();
        landingPage.landingPageSlidersOnHomePage();
        landingPage.bestSellers_GreatDeals_HighlyRated();
    });

    it('should allow subscribing to the newsletter', () => {
        // Entering an email into the newsletter subscription input field
        cy.get('.landing_page_footer_newsletter_input').type('test@example.com');
        
        // Verifying that the wine subscription section is accessible
        landingPage.wineSubscriptions();
        
        // Clicking the subscribe button to submit the subscription
        cy.get('.landing_page_footer_last_child').contains('Subscribe to our newsletter').click();
        
        // Verifying that a success message appears after subscribing
        cy.get('.success-message').should('be.visible'); // Assuming a success message appears
    });

    it('should navigate to checkout when checkout button is clicked', () => {
        // Clicking the checkout button to proceed to checkout
        cy.get('.checkout-button').click();
        
        // Verifying that the URL contains "checkout" to confirm navigation
        cy.url().should('contain', 'checkout');
    });
});
