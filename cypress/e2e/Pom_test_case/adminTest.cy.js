import AdminPage from "../../support/pageObjects/AdminPage";
import LoginPage from "../../support/pageObjects/LoginPage";
import RegisterPage from "../../support/pageObjects/RegisterPage";

const adminData = new AdminPage();
const registerPage = new RegisterPage();
const baseURL = "https://pay-pal-pioneers-068.vercel.app/"
beforeEach(() => {
    cy.visit(baseURL );
    
})

describe('Admin Test', () => {

     
    it('Admin can see the dashboard', () => {
        registerPage.fillForm('Vikas', 'viki@gmail.com', 'password123', 'Admin');
        registerPage.submit();
        // cy.url().should('include', '/success'); // Assuming it redirects to a success page
        cy.wait(4000);
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.assertMainTitle();
    })

    it('should display the products card', () => {
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.assertProductsCard();
    });

    it('should display the categories card', () => {
 
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.assertCategoriesCard();
    });

    it('should display the correct products count', () => {
     
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.assertProductsCount('62');
    });

    it('should display the correct categories count', () => {
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.assertCategoriesCount('5');
    });

    it('should allow selecting a category', () => {
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.selectCategory('Red wine');
        adminData.assertCategorySelected('Red wine');
    });

    it('should allow selecting another category', () => {
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.selectCategory('White wine');
        adminData.assertCategorySelected('White wine');
    });

    it('should allow selecting the "All Categories" option', () => {
        adminData.loginAdmin('viki@gmail.com', 'password123');
        adminData.selectCategory('All Categories');
        adminData.assertCategorySelected('All Categories');
    });
})