class LoginPage {
  elements = {
    usernameTextbox: () => cy.get('input#username'),
    passwordTextbox: () => cy.get('input#password'),
    loginButton: () => cy.get('button#submit'),
    errorMessage: () => cy.get('div#error'),
    successMessage: () => cy.get('div.post-header h1'),
  };

  typeUsername(username) {
    return this.elements.usernameTextbox().clear().type(username);
  }

  typePassword(password) {
    return this.elements.passwordTextbox().clear().type(password);
  }

  clickLoginButton() {
    return this.elements.loginButton().click();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }

  getSuccessMessage() {
    return this.elements.successMessage();
  }
}

export default new LoginPage();
