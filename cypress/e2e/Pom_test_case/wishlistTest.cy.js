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

    
    it('Add product to wishlist with login', () => {
        cy.wait(4000);
        adminData.loginAdmin('xyzz@gmail.com', '123654');
        wishlistPage.toWishListPagelogin();
        
    })

     
            // it('Checking the product is added to wishlist or not', () => {
            //     cy.wait(4000);
            //     adminData.loginAdmin('xyzz@gmail.com', '123654');
            //     wishlistPage.tocheckwishlistProduct();
                
                
            // })


    
})
