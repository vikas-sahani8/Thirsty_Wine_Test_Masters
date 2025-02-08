class LandingPage{
    visit(){
        cy.visit('https://pay-pal-pioneers-068.vercel.app');
    }
    headerSection() {

        // Click the red option 
        cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });
        // cy.xpath('(//span[@class="product-cart-button"])[1]').click({ force: true });
        
        // Click the white option
        cy.xpath('(//div[@class="landing_page_navbar_children"])[2]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Click the rose option
        cy.xpath('(//div[@class="landing_page_navbar_children"])[3]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Click the sparkling option
        cy.xpath('(//div[@class="landing_page_navbar_children"])[4]').click({ force: true });
        // Verify URL check for navigation
        //cy.url().should('contain','catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Click the Promotions option
        cy.xpath('(//div[@class="landing_page_navbar_children"])[5]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Click the Set&Gifts option
        cy.xpath('(//div[@class="landing_page_navbar_children"])[6]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

    }

    whatWouldYouLikeSection() {

        // Click the white option     
        cy.xpath('(//p[@class="what_would_you_like_cards_title"])[1]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Click the red option 
        cy.xpath('(//p[@class="what_would_you_like_cards_title"])[2]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Click the rose option
        cy.xpath('(//p[@class="what_would_you_like_cards_title"])[3]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Click the sparkling option
        cy.xpath('(//p[@class="what_would_you_like_cards_title"])[4]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });
    }

    landingPageSlidersOnHomePage() {
        // Verify the sliders
        cy.contains(' MORE BOTTLE LESS PRICE').should('be.visible');
        cy.contains(' REWARDS ON EVERY ORDER').should('be.visible');
        cy.contains(' SENDING THE ORDER ON THE SAME DAY').should('be.visible');
        cy.contains(' FREE SHIPPING').should('be.visible');
        cy.contains(' MORE BOTTLE LESS PRICE').should('be.visible');
    }

    setAndGiftsTitleOnHomePage() {

        cy.contains('Sets and Gifts').should('be.visible');
        // Click wine glasses
        cy.get('[src="/assets/set_and_gift_3-Bemf_ysj.jpeg"]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });
        
        // Click wine sets
        cy.get('[src="/assets/set_and_gift_1-CX9j2Nvt.jpeg"]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });
        
        // Click thev Decanters
        cy.get('[src="/assets/set_and_gift_2-4XpF9_L1.jpeg"]').should('be.visible').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'catlog');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });
    }

    wineSubscritptions() {
        // Verify the wine subcsriptions
        cy.contains('Wine Subscription').should('be.visible');
        cy.contains('More about subscription').should('be.visible').click({ force: true });
    }

    bestSellers_GreatDeals_HighlyRated() {

        // Verify the best sellers
        cy.contains('Best Sellers').should('be.visible').click({ force: true });
        cy.contains('Brunello di Montalcino, 0,75L').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'productpage');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // Select the great deals
        cy.contains('Great Deals').should('be.visible').click({ force: true });
        cy.contains('Amarone della Valpolicella, 0,75L').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'productpage');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

        // select the highlt rated
        cy.contains('Highly Rated').should('be.visible').click({ force: true });
        cy.contains('Brunello di Montalcino, 0,75L').click({ force: true });
        // Verify URL check for navigation
        cy.url().should('contain', 'productpage');
        // click the home icon
        cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });

    }
}

export default LandingPage;