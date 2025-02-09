 import WishlistPage from '../../support/pageObjects/WishlistPage';
import AdminPage from '../../support/pageObjects/AdminPage';

const wishlistPage = new WishlistPage();
const adminData = new AdminPage();

const baseURL = "https://pay-pal-pioneers-068.vercel.app/"


// ADD PRODUCT Into WISHLIST without login
describe('Wishlist Test', () => {
    beforeEach(() => {
        cy.visit(baseURL);
    })

    it('Add product to wishlist without login', () => {
        wishlistPage.toWishListPage();
    })
    
})