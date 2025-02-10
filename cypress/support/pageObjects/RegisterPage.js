class RegisterPage {
    // Locator for the name input field
    get nameInput() {
        return cy.get('input[name="name"]'); // Selects the name input field
    }

    // Locator for the email input field
    get emailInput() {
        return cy.get('input[name="email"]'); // Selects the email input field
    }

    // Locator for the password input field
    get passwordInput() {
        return cy.get('input[name="password"]'); // Selects the password input field
    }

    // Locator for the role selection dropdown
    get roleSelect() {
        return cy.get('select[name="role"]'); // Selects the role dropdown
    }

    // Locator for the register button
    get registerButton() {
        return cy.get('button[type="submit"]'); // Selects the submit button to complete registration
    }

    // Locator for the login link to navigate to the login page
    get loginLink() {
        return cy.get('a[href="/login"]'); // Selects the login link
    }

    // Method to fill out the registration form with provided user details
    fillForm(name, email, password, role) {
<<<<<<< HEAD
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        cy.contains('Sign Up').click({ force: true });
        cy.url().should('contain', 'register');
        this.nameInput.type(name);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.roleSelect.select(role);
=======
        this.nameInput.type(name); // Types the name into the input field
        this.emailInput.type(email); // Types the email into the input field
        this.passwordInput.type(password); // Types the password into the input field
        this.roleSelect.select(role); // Selects the user role from the dropdown
>>>>>>> 7484a92bdeb308e458c8cce237af9202ffa2831a
    }

    // Method to submit the registration form
    submit() {
        this.registerButton.click(); // Clicks the register button to submit the form
    }
}

export default RegisterPage;
