class LoginPage {
    // Locator for the email input field
    emailInput = () => cy.get('input[name=email]');
    
    // Locator for the password input field
    passwordInput = () => cy.get('input[name=password]');
    
    // Locator for the login button
    loginButton = () => cy.get('button[type=submit]');

    // Method to fill the email input field
    fillEmail(email) {
        this.emailInput().clear().type(email); // Clears any existing text and types the provided email
    }

    // Method to fill the password input field
    fillPassword(password) {
        this.passwordInput().clear().type(password); // Clears any existing text and types the provided password
    }

    // Method to click the login button and submit the form
    submit() {
        this.loginButton().click();
    }

    // Method to perform the full login process
    login(email, password) {
        this.fillEmail(email); // Enter the email
        this.fillPassword(password); // Enter the password
        this.submit(); // Click the login button to submit the form
    }
}

export default LoginPage;
