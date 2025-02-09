class WishListPage{
    product  = "//div[normalize-space()='White']"
    wishlistLikeIcon = '.card-container > :nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-regular'
    tostMessage = "#chakra-toast-manager-bottom"
    tostMessage1 = "#chakra-toast-manager-bottom"


    wishlistIcon = (':nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-solid');
    toWishListPage(){
        cy.xpath(this.product).click()
        cy.get(this.wishlistLikeIcon).click()
        cy.get(this.tostMessage).should('be.visible').and('contain.text', 'Login Required.')
        }

    toWishListPagelogin(){
        cy.xpath(this.product).click()
        cy.get(this.wishlistLikeIcon).click()
        cy.get(this.tostMessage1).should('be.visible').and('contain.text', 'Added to wishlist')
        cy.get('.landing_page_header_fav > .svg-inline--fa > path').click();    
        cy.get('.wishlist-header').should('be.visible').and('contain.text', 'Your WishList');

        cy.get('.wishlist-card').should('be.visible');
        cy.get('.remove-button').click();
        }

       
}
export default WishListPage;