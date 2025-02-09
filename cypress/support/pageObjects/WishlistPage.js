class WishListPage{
    product  = "//div[normalize-space()='White']"
    wishlistLikeIcon = '.card-container > :nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-regular'
    tostMessage = "#chakra-toast-manager-bottom"
    wishlistIcon = "//p[@class='landing_page_header_fav']"
    toWishListPage(){
        cy.xpath(this.product).click()
        cy.get(this.wishlistLikeIcon).click()
        cy.get(this.tostMessage).should('be.visible').and('contain.text', 'Login Required.')
        

    }
}
export default WishListPage;