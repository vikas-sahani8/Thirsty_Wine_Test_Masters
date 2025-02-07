import LoginPage from "../../support/pageObjects/LoginPage";

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        // Visit the website before each test
        loginPage.visitURL();
    });

    it('should navigate to the login page successfully', () => {
        loginPage.logIn();
        cy.url().should('contain', 'login');
    });

});
