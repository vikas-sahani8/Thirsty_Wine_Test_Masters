import LoginPage from "../../support/pageObjects/LoginPage";


describe('Login Page Tests', () => {
    const loginPage = new LoginPage();
    const baseUrl = 'https://pay-pal-pioneers-068.vercel.app';

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        cy.contains('Log In').should('exist').click({ force: true });
        // Verify Url chek
        cy.url().should('contain', 'login');
    });

    it('should display the login heading', () => {
        cy.get('h1.chakra-heading').should('contain.text', 'Login');
    });

    it('should require email and password to login', () => {
        loginPage.submit();
        cy.get('input[name=email]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name=password]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name=email]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
        cy.get('input[name=password]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
    });

 

    it('should show an error for invalid email format', () => {
        loginPage.fillEmail('sf@.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
        // Add assertion for error message based on your application behavior
    });

    it('should show an error for incorrect password', () => {
        loginPage.fillEmail('vikas1@gmail.com');
        loginPage.fillPassword('0fghj');
        loginPage.submit();
        // Add assertion for error message based on your application behavior
    });
    it('should accept valid email and password', () => {
        loginPage.fillEmail('vikas@gmail.com');
        loginPage.fillPassword('12345');
        loginPage.submit();
        cy.get('.landing_page_header_login_dropdown_parent').should('contain.text', 'Vikas');
    });
});
