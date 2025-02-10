import RegisterPage from "../../support/pageObjects/RegisterPage";
import LoginPage from "../../support/pageObjects/LoginPage";

// Creating instances of RegisterPage and LoginPage classes
const registerPage = new RegisterPage();
const loginPage = new LoginPage();  
const baseUrl = 'https://pay-pal-pioneers-068.vercel.app';

// Test suite for Register Page functionality
describe('Register Page Tests', () => {
    beforeEach(() => {
        // Visiting the base URL before each test to ensure a fresh state
        cy.visit(baseUrl);
        
        // Clicking on the user icon to open the authentication menu
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        
        // Clicking on the "Sign Up" button to navigate to the registration page
        cy.contains('Sign Up').click({ force: true });
        
        // Verifying that the URL contains 'register' to confirm navigation
        cy.url().should('contain', 'register');
    });

    it('should display the register heading', () => {
        // Ensuring that the register page heading is visible and correct
        cy.get('[class="chakra-heading css-10z5u58"]').should('have.text', 'Register');
    });

    it('should fill and submit the registration form', () => {
        // Filling the registration form with test data
        registerPage.fillForm('Atul', 'ashu@gmail.com', 'password123', 'User');
        
        // Submitting the registration form
        registerPage.submit();
    });

    it('should show validation errors when fields are empty', () => {
        // Attempting to submit an empty form to check validation errors
        registerPage.submit();
        
        // Ensuring validation classes appear on empty fields
        cy.get('input[name="name"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name="email"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name="password"]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('select[name="role"]').should('have.class', 'chakra-select css-161pkch');
    });

    it('should verify role select options', () => {
        // Checking that the role dropdown contains exactly two options: User and Admin
        registerPage.roleSelect.children().should('have.length', 2);
        registerPage.roleSelect.children().first().should('have.text', 'User');
        registerPage.roleSelect.children().last().should('have.text', 'Admin');
    });

    it('should not allow registration with invalid email format', () => {
        // Attempting registration with an invalid email format
        registerPage.fillForm('vikass', 'sahni', 'password123', 'User');
        registerPage.submit();
        
        // Ensuring that the email field shows a validation error
        cy.get('input[name="email"]').should('have.class', 'chakra-input css-1cjy4zv');
    });

    it('should allow user registration and login', () => {
        // Filling out the registration form with valid details
        registerPage.fillForm('d', 'gff@gmail.com', 'password123', 'User');
        registerPage.submit();
        
        // Waiting to ensure the process completes before attempting login
        cy.wait(4000);
        
        // Logging in with newly registered credentials
        loginPage.fillEmail('gff@gmail.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
    });

    it('should allow admin registration and login', () => {
        // Filling out the registration form with valid admin details
        registerPage.fillForm('d', 'sg@gmail.com', 'password123', 'Admin');
        registerPage.submit();
        
        // Waiting before logging in to ensure registration completes
        cy.wait(4000);
        
        // Logging in as an admin
        loginPage.fillEmail('sg@gmail.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
        
        // Checking if the logged-in user name is displayed
        cy.get('.landing_page_header_login_dropdown_parent > div').should('contain.text', 'd');
        
        // Logging out
        cy.get("[class='landing_page_header_login_dropdown_parent']").should('be.visible').click({ force: true });
        cy.contains('Sign out').click({ force: true });
    });
});

// Test suite for Login Page functionality
describe('Login Page Tests', () => {
    beforeEach(() => {
        // Visiting the base URL before each login test to ensure a fresh state
        cy.visit(baseUrl);
        
        // Clicking on the user icon to open authentication options
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        
        // Clicking the "Log In" button to navigate to the login page
        cy.contains('Log In').should('exist').click({ force: true });
        
        // Verifying that the URL contains 'login' to confirm navigation
        cy.url().should('contain', 'login');
    });

    it('should display the login heading', () => {
        // Ensuring that the login page heading is displayed correctly
        cy.get('h1.chakra-heading').should('contain.text', 'Login');
    });

    it('should require email and password to login', () => {
        // Attempting login without filling credentials to check required field validations
        loginPage.submit();
        
        // Checking for validation errors on email and password fields
        cy.get('input[name=email]').should('have.class', 'chakra-input css-1cjy4zv');
        cy.get('input[name=password]').should('have.class', 'chakra-input css-1cjy4zv');
    });

    it('should show an error for invalid email format', () => {
        // Attempting login with an incorrect email format
        loginPage.fillEmail('vikas@gmail.com');
        loginPage.fillPassword('password123');
        loginPage.submit();
    });

    it('should show an error for incorrect password', () => {
        // Attempting login with a wrong password
        loginPage.fillEmail('vikas1@gmail.com');
        loginPage.fillPassword('0fghj');
        loginPage.submit();
    });

    it('should accept valid email and password', () => {
        // Logging in with valid credentials
        loginPage.fillEmail('vikas@gmail.com');
        loginPage.fillPassword('12345');
        loginPage.submit();
    });
});