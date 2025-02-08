class LoginPage {
    emailInput = () => cy.get('input[name=email]');
    passwordInput = () => cy.get('input[name=password]');
    loginButton = () => cy.get('button[type=submit]');

    fillEmail(email) {
        this.emailInput().clear().type(email);
    }

    fillPassword(password) {
        this.passwordInput().clear().type(password);
    }

    submit() {
        this.loginButton().click();
    }

    login(email, password) {
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }
  

}

export default LoginPage;