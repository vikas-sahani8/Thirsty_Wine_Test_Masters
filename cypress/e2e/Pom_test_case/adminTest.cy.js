import AdminPage from "../../support/pageObjects/AdminPage";
import LoginPage from "../../support/pageObjects/LoginPage";
import RegisterPage from "../../support/pageObjects/RegisterPage";

// Creating an instance of the AdminPage class to access its methods
const adminData = new AdminPage();
<<<<<<< HEAD
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
=======
const baseURL = "https://pay-pal-pioneers-068.vercel.app/";

beforeEach(() => {
    cy.visit(baseURL );
    adminData.loginAdmin('zyz@gmail.com', '1234');
})

describe('Admin Test', () => {
    
    it('Admin can see the dashboard', () => {
        // Verifies that the main title of the dashboard is displayed correctly
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.assertMainTitle();
    });

    it('should display the products card', () => {
<<<<<<< HEAD
        adminData.loginAdmin('viki@gmail.com', 'password123');
=======
        // Ensures that the products card is visible on the admin dashboard
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.assertProductsCard();
    });

    it('should display the categories card', () => {
<<<<<<< HEAD
 
        adminData.loginAdmin('viki@gmail.com', 'password123');
=======
        // Ensures that the categories card is visible on the admin dashboard
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.assertCategoriesCard();
    });

    it('should display the correct products count', () => {
<<<<<<< HEAD
     
        adminData.loginAdmin('viki@gmail.com', 'password123');
=======
        // Checks if the product count displayed matches the expected value (62)
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.assertProductsCount('62');
    });

    it('should display the correct categories count', () => {
<<<<<<< HEAD
        adminData.loginAdmin('viki@gmail.com', 'password123');
=======
        // Checks if the category count displayed matches the expected value (5)
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.assertCategoriesCount('5');
    });

    it('should allow selecting a category', () => {
<<<<<<< HEAD
        adminData.loginAdmin('viki@gmail.com', 'password123');
=======
        // Selects the 'Red wine' category from the dropdown and verifies the selection
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.selectCategory('Red wine');
        adminData.assertCategorySelected('Red wine');
    });

    it('should allow selecting another category', () => {
<<<<<<< HEAD
        adminData.loginAdmin('viki@gmail.com', 'password123');
=======
        // Selects the 'White wine' category from the dropdown and verifies the selection
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.selectCategory('White wine');
        adminData.assertCategorySelected('White wine');
    });

    it('should allow selecting the "All Categories" option', () => {
<<<<<<< HEAD
        adminData.loginAdmin('viki@gmail.com', 'password123');
=======
        // Selects the 'All Categories' option from the dropdown and verifies the selection
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
        adminData.selectCategory('All Categories');
        adminData.assertCategorySelected('All Categories');
    });
});
