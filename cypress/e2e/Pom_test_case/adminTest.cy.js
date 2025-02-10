import AdminPage from "../../support/pageObjects/AdminPage";

const adminData = new AdminPage();
const baseURL = "https://pay-pal-pioneers-068.vercel.app/"
beforeEach(() => {
    cy.visit(baseURL );
    adminData.loginAdmin('zyz@gmail.com', '1234');
})

describe('Admin Test', () => {
     
    it('Admin can see the dashboard', () => {
        adminData.assertMainTitle();
    })

    it('should display the products card', () => {
        adminData.assertProductsCard();
    });

    it('should display the categories card', () => {
        adminData.assertCategoriesCard();
    });

    it('should display the correct products count', () => {
        adminData.assertProductsCount('62');
    });

    it('should display the correct categories count', () => {
        adminData.assertCategoriesCount('5');
    });

    it('should allow selecting a category', () => {
        adminData.selectCategory('Red wine');
        adminData.assertCategorySelected('Red wine');
    });

    it('should allow selecting another category', () => {
        adminData.selectCategory('White wine');
        adminData.assertCategorySelected('White wine');
    });

    it('should allow selecting the "All Categories" option', () => {
        adminData.selectCategory('All Categories');
        adminData.assertCategorySelected('All Categories');
    });
})