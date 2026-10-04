import loginPage from '../../pages/loginPage';

describe('Login Test Suite', () => {
  let loginData;
  before(() => {
    cy.fixture('login').then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should login with valid credentials', () => {
    loginPage
      .typeUsername(loginData.correctUsername)
      .should('contain.value', loginData.correctUsername);
    loginPage
      .typePassword(loginData.correctPassword)
      .should('contain.value', loginData.correctPassword);
    loginPage.clickLoginButton();
    cy.url().should('contain', 'successfully');
    loginPage.getSuccessMessage().should('contain.text', 'Logged In');
  });

  it('should not be able to login having wrong password', () => {
    loginPage
      .typeUsername(loginData.correctUsername)
      .should('contain.value', loginData.correctUsername);
    loginPage
      .typePassword(loginData.incorrectPassword)
      .should('contain.value', loginData.incorrectPassword);
    loginPage.clickLoginButton();
    loginPage.getErrorMessage().should('be.visible');
    loginPage
      .getErrorMessage()
      .should('contain.text', 'Your password is invalid');
  });

  it('should not be able to login having wrong username', () => {
    loginPage
      .typeUsername(loginData.incorrectUsername)
      .should('contain.value', loginData.incorrectUsername);
    loginPage
      .typePassword(loginData.correctPassword)
      .should('contain.value', loginData.correctPassword);
    loginPage.clickLoginButton();
    loginPage
      .getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!');
  });
});
