/// <reference types="Cypress" />
import homePageElements from "../elements/homePageElements";

class HomePageObjects {
  validateUserName() {
    cy.get(homePageElements.welcomeTitle()).contains("Talisson M");
  }

  valitateLogoutButton() {
    cy.get(homePageElements.logoutBtn());
  }

  validateSuccessOnLogin() {
    this.validateUserName();
    this.valitateLogoutButton();
  }
}

export default new HomePageObjects;
