import AdminPage from "../../support/pageObjects/AdminPage";

// Creating an instance of the AdminPage class to access its methods
const adminData = new AdminPage();
const baseURL = "https://pay-pal-pioneers-068.vercel.app/";

beforeEach(() => {
    cy.visit(baseURL );
    adminData.loginAdmin('zyz@gmail.com', '1234');
})

describe('Admin Test', () => {
    
    it('Admin can see the dashboard', () => {
        // Verifies that the main title of the dashboard is displayed correctly
        adminData.assertMainTitle();
    });

    it('should display the products card', () => {
        // Ensures that the products card is visible on the admin dashboard
        adminData.assertProductsCard();
    });

    it('should display the categories card', () => {
        // Ensures that the categories card is visible on the admin dashboard
        adminData.assertCategoriesCard();
    });

    it('should display the correct products count', () => {
        // Checks if the product count displayed matches the expected value (62)
        adminData.assertProductsCount('62');
    });

    it('should display the correct categories count', () => {
        // Checks if the category count displayed matches the expected value (5)
        adminData.assertCategoriesCount('5');
    });

    it('should allow selecting a category', () => {
        // Selects the 'Red wine' category from the dropdown and verifies the selection
        adminData.selectCategory('Red wine');
        adminData.assertCategorySelected('Red wine');
    });

    it('should allow selecting another category', () => {
        // Selects the 'White wine' category from the dropdown and verifies the selection
        adminData.selectCategory('White wine');
        adminData.assertCategorySelected('White wine');
    });

    it('should allow selecting the "All Categories" option', () => {
        // Selects the 'All Categories' option from the dropdown and verifies the selection
        adminData.selectCategory('All Categories');
        adminData.assertCategorySelected('All Categories');
    });
});
