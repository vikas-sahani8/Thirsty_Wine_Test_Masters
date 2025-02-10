import RegisterPage from "../../support/pageObjects/RegisterPage";
import LoginPage from "../../support/pageObjects/LoginPage";

    const registerPage = new RegisterPage();
    const loginPage = new LoginPage();  
    const baseUrl = 'https://pay-pal-pioneers-068.vercel.app';
    
describe('Register Page Tests', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
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
        registerPage.fillForm('Atul', 'vikas@gmail.com', 'password123', 'User');
        registerPage.submit();

    });

    it('should show validation errors when fields are empty', () => {
        registerPage.submit();
        cy.get('input[name="name"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name="email"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name="password"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('select[name="role"]').should('have.class', 'chakra-select css-161pkch');
    });
    

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
        registerPage.fillForm('d', 'gff@gmail.com', 'password123', 'User');
        registerPage.submit();
        // cy.url().should('include', '/success'); // Assuming it redirects to a success page
        cy.wait(4000);
        loginPage.fillEmail('gff@gmail.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
        
    });

    it('should allow registration with valid details in ADMIN & after it login', () => {
        registerPage.fillForm('Vikas', 'vikas1@gmail.com', 'password123', 'Admin');
        registerPage.submit();
        // cy.url().should('include', '/success'); // Assuming it redirects to a success page
        cy.wait(4000);
        loginPage.fillEmail('vikas1@gmail.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
        cy.get('.landing_page_header_login_dropdown_parent > div').should('contain.text', 'Vikas');
        cy.get("[class='landing_page_header_login_dropdown_parent']").should('be.visible').click({ force: true });
        cy.contains('Sign out').click({ force: true });

    });

    
});

describe('Login Page Tests', () => {
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
        loginPage.fillEmail('vika@ail.com');
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
         
    });

   
})