class RegisterPage{
    get nameInput() {
        return cy.get('input[name="name"]');
    }

    get emailInput() {
        return cy.get('input[name="email"]');
    }

    get passwordInput() {
        return cy.get('input[name="password"]');
    }

    get roleSelect() {
        return cy.get('select[name="role"]');
    }

    get registerButton() {
        return cy.get('button[type="submit"]');
    }

    get loginLink() {
        return cy.get('a[href="/login"]');
    }

    fillForm(name, email, password, role) {
        this.nameInput.type(name);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.roleSelect.select(role);
    }

    submit() {
        this.registerButton.click();
    }
}


export default RegisterPage;