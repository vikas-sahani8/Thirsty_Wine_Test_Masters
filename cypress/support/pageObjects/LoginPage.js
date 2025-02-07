class LoginPage {
    visitURL() {
        // Verify URL
        cy.visit("https://pay-pal-pioneers-068.vercel.app/");
    }

    logIn() {
        cy.get('.landing_page_header_icons').should('be.visible').click({ force: true });
        // click the login button
        cy.contains('Log In').click({ force: true });
        // Verify Url chek
        cy.url().should('contain', 'login');
    }
    


}

export default LoginPage;
