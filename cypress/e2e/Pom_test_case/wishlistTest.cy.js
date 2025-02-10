import WishlistPage from '../../support/pageObjects/WishlistPage';
import AdminPage from '../../support/pageObjects/AdminPage';

// Creating instances of WishlistPage and AdminPage classes
const wishlistPage = new WishlistPage();
const adminData = new AdminPage();

// Base URL of the application
const baseURL = "https://pay-pal-pioneers-068.vercel.app/";

// Test suite for Wishlist functionality
// This suite contains tests for adding products to the wishlist with and without login

describe('Wishlist Test', () => {
    // Before each test, visit the base URL
    beforeEach(() => {
        cy.visit(baseURL);
    });

    // Test case: Attempt to add a product to the wishlist without logging in
    it('Add product to wishlist without login', () => {
        wishlistPage.toWishListPage(); // Calls the method to add a product to the wishlist
    });

    // Test case: Add a product to the wishlist after logging in
    it('Add product to wishlist with login', () => {
        cy.wait(4000); // Waits for 4 seconds before proceeding
        adminData.loginAdmin('xyzz@gmail.com', '123654'); // Logs in using admin credentials
        wishlistPage.toWishListPagelogin(); // Calls the method to add a product to the wishlist
    });

    
});
