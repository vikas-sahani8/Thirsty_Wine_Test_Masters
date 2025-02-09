
class AdminPage{
    emailInput = () => cy.get('input[name=email]');
    passwordInput = () => cy.get('input[name=password]');
    loginButton = () => cy.get('button[type=submit]');
    mainTitle = "//h3[normalize-space()='DASHBOARD']";

    get productsCard() {
        return '.card:contains("PRODUCTS")';
    }

    get categoriesCard() {
        return '.card:contains("CATEGORIES")';
    }

    get categorySelect() {
        return '.category-select';
    }

    get productsCount() {
        return `${this.productsCard} h1`;
    }

    get categoriesCount() {
        return `${this.categoriesCard} h1`;
    }

    assertMainTitle() {
        cy.xpath(this.mainTitle)
        .should('have.text', 'DASHBOARD')
        .should('have.css', 'color', 'rgb(21, 21, 21)');
    }

    assertProductsCard() {
        cy.get(this.productsCard).should('be.visible');
    }

    assertCategoriesCard() {
        cy.get(this.categoriesCard).should('be.visible');
    }

    assertProductsCount(count) {
        cy.get(this.productsCount).should('have.text', count);
    }

    assertCategoriesCount(count) {
        cy.get(this.categoriesCount).should('have.text', count);
    }

    selectCategory(category) {
        cy.get(this.categorySelect).select(category);
    }

    assertCategorySelected(category) {
        cy.get(this.categorySelect).should('have.value', category);
    }

    fillEmail(email) {
        this.emailInput().clear().type(email);
    }

    fillPassword(password) {
        this.passwordInput().clear().type(password);
    }

    submit() {
        this.loginButton().click();
    }

    loginAdmin(email, password){
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        cy.contains('Log In').should('exist').click({ force: true });
        // Verify Url chek
        cy.url().should('contain', 'login');
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }
}

export default AdminPage;
