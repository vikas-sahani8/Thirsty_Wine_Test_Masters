class AdminPage {
    // Locators for login input fields and button
    emailInput = () => cy.get('input[name=email]');
    passwordInput = () => cy.get('input[name=password]');
    loginButton = () => cy.get('button[type=submit]');
    
    // XPath selector for the dashboard main title
    mainTitle = "//h3[normalize-space()='DASHBOARD']";

    // Getters for locating product and category cards
    get productsCard() {
        return '.card:contains("PRODUCTS")';
    }

    get categoriesCard() {
        return '.card:contains("CATEGORIES")';
    }

    // Getter for selecting a category dropdown
    get categorySelect() {
        return '.category-select';
    }

    // Getters for fetching product and category counts displayed on cards
    get productsCount() {
        return `${this.productsCard} h1`;
    }

    get categoriesCount() {
        return `${this.categoriesCard} h1`;
    }

    // Assertion to check the presence and styling of the dashboard title
    assertMainTitle() {
        cy.xpath(this.mainTitle)
            .should('have.text', 'DASHBOARD')
            .should('have.css', 'color', 'rgb(21, 21, 21)');
    }

    // Assertion to check if the Products card is visible
    assertProductsCard() {
        cy.get(this.productsCard).should('be.visible');
    }

    // Assertion to check if the Categories card is visible
    assertCategoriesCard() {
        cy.get(this.categoriesCard).should('be.visible');
    }

    // Assertion to verify the correct number of products displayed
    assertProductsCount(count) {
        cy.get(this.productsCount).should('have.text', count);
    }

    // Assertion to verify the correct number of categories displayed
    assertCategoriesCount(count) {
        cy.get(this.categoriesCount).should('have.text', count);
    }

    // Select a category from the dropdown
    selectCategory(category) {
        cy.get(this.categorySelect).select(category);
    }

    // Verify the selected category value in the dropdown
    assertCategorySelected(category) {
        cy.get(this.categorySelect).should('have.value', category);
    }

    // Function to fill in the email input field
    fillEmail(email) {
        this.emailInput().clear().type(email);
    }

    // Function to fill in the password input field
    fillPassword(password) {
        this.passwordInput().clear().type(password);
    }

    // Function to submit the login form
    submit() {
        this.loginButton().click();
    }

    // Function to handle the complete admin login process
    loginAdmin(email, password) {
        // Clicking on the user icon to open authentication options
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        
        // Clicking on the Log In button to navigate to login page
        cy.contains('Log In').should('exist').click({ force: true });
        
        // Verifying that the URL contains 'login' to confirm navigation
        cy.url().should('contain', 'login');
        
        // Entering email and password, then submitting the form
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }
}

export default AdminPage;
