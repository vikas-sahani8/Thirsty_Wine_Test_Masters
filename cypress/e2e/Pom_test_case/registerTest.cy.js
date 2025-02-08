import RegisterPage from "../../support/pageObjects/RegisterPage";
import LoginPage from "../../support/pageObjects/LoginPage";


describe('Register Page Tests', () => {
    const registerPage = new RegisterPage();
    const loginPage = new LoginPage();  

    beforeEach(() => {
        cy.visit('https://pay-pal-pioneers-068.vercel.app');
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        // click the Signup button
        cy.contains('Sign Up').click({ force: true });
        // Verify Url chek
        cy.url().should('contain', 'register');
    });

    it('should display the register heading', () => {
        cy.get('[class="chakra-heading css-10z5u58"]').should('have.text', 'Register');
    });

    it('should fill and submit the registration form', () => {
        registerPage.fillForm('Atul', 'ashu@gmail.com', 'password123', 'User');
        registerPage.submit();

    });

    it('should show validation errors when fields are empty', () => {
        registerPage.submit();
        cy.get('input[name="name"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name="email"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name="password"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('select[name="role"]').should('have.class', 'chakra-select css-161pkch');
    });

    // it('should navigate to login page when login link is clicked', () => {
    //     registerPage.loginLink.click();
    //     cy.url().should('include', '/login');
    // });

    it('should check that the role select has the correct options', () => {
        registerPage.roleSelect.children().should('have.length', 2);
        registerPage.roleSelect.children().first().should('have.text', 'User');
        registerPage.roleSelect.children().last().should('have.text', 'Admin');
    });

    it('should not allow registration with invalid email format', () => {
        registerPage.fillForm('vikass', 'sahni', 'password123', 'User');
        registerPage.submit();
        cy.get('input[name="email"]').should('have.class', 'chakra-input css-1cjy4zv');
    });

    it('should allow registration with valid details in USER & after it login', () => {
        registerPage.fillForm('d', 'd@gmail.com', 'password123', 'User');
        registerPage.submit();
        // cy.url().should('include', '/success'); // Assuming it redirects to a success page
        cy.wait(4000);
        loginPage.fillEmail('d@gmail.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
        
    });

    it('should allow registration with valid details in ADMIN & after it login', () => {
        registerPage.fillForm('d', 'd@gmail.com', 'password123', 'Admin');
        registerPage.submit();
        // cy.url().should('include', '/success'); // Assuming it redirects to a success page
        cy.wait(4000);
        loginPage.fillEmail('d@gmail.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
        
    });

    
});