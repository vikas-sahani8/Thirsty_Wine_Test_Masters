import LandingPage from "../../support/pageObjects/LandingPage";

describe('Landing Page Tests', () => {
    const landingPage = new LandingPage();

    beforeEach(() => {
        landingPage.visit();
    });

    it('should display the logo', () => {
        cy.get('.landing_page_header_logo').should('be.visible');
    });

    it('should allow searching for wine', () => {
        cy.get('.landing_page_header_search').type('Chardonnay');
        cy.get('.landing_page_header_search_btn').click();
        landingPage.setAndGiftsTitleOnHomePage();
    });

    it('should open the login dropdown when clicked', () => {
        cy.get('.landing_page_header_login').click({ force: true });
        cy.get('.landing_page_header_icons_login_dropdown').should('be.visible');
        landingPage.headerSection();
    });

    it('should open the cart when clicked', () => {
        cy.get('.landing_page_header_cart').click();
        cy.get('.cart-title').should('contain', 'Shopping cart');
    });

    it('should display product cards', () => {
        cy.get('.product-card-container').should('have.length.greaterThan', 0);
        landingPage.whatWouldYouLikeSection();
        landingPage.landingPageSlidersOnHomePage();
        landingPage.bestSellers_GreatDeals_HighlyRated();
    });

    it('should allow subscribing to the newsletter', () => {
        cy.get('.landing_page_footer_newsletter_input').type('test@example.com');
        landingPage.wineSubscriptions();
        cy.get('.landing_page_footer_last_child').contains('Subscribe to our newsletter').click();
        cy.get('.success-message').should('be.visible'); // Assuming a success message appears
    });

    it('should navigate to checkout when checkout button is clicked', () => {
        cy.get('.checkout-button').click();
        cy.url().should('contain', 'checkout'); // Assuming this is the correct route
    });
});
