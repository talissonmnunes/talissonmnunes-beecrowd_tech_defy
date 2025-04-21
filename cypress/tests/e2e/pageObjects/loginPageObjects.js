/// <reference types="Cypress" />
import loginPageElements from "../elements/loginPageElements";

class LoginPageObjects {
  visitSite() {
    cy.visit(Cypress.config("baseUrl"));
  }

  loginOnSite(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.loginButton();
  }

  enterEmail(email) {
    console.log(email);
    cy.get(loginPageElements.emailInput()).type(email);
  }

  enterPassword(password) {
    cy.get(loginPageElements.passwordInput()).type(password);
  }

  loginButton() {
    cy.get(loginPageElements.btnSubmit()).click();
  }

  spanInvalidLoginValidation() {
    cy.get(loginPageElements.span).contains("Email e/ou senha inválidos");
  }

  spanRequiredErrorValidation() {
    cy.get(loginPageElements.span).contains("Email é obrigatório");
    cy.get(loginPageElements.span).contains("Password é obrigatório");
  }
}

export default new LoginPageObjects();
