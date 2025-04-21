import loginPageObjects from "../pageObjects/loginPageObjects";
import homePageObjects from "../pageObjects/homePageObjects";

describe("Login on Site", () => {
  it("Given I access the site login page", () => {
    loginPageObjects.visitSite();
  });

  it("When I enter email and password", () => {
    loginPageObjects.loginOnSite("teste@teste123.com", "teste123");
  });

  it("Then I can see the home page", () => {
    homePageObjects.validateSuccessOnLogin();
  });
});

describe("Login on Site using invalid email", () => {
  it("Given I access the site login page", () => {
    loginPageObjects.visitSite();
  });

  it("When I enter invalid_email and password", () => {
    loginPageObjects.loginOnSite("teste@teste.com", "teste123");
  });

  it("Then I can see the fail login alert", () => {
    loginPageObjects.spanInvalidLoginValidation();
  });
});

describe("Login on Site using invalid password", () => {
  it("Given I access the site login page", () => {
    loginPageObjects.visitSite();
  });

  it("When I enter email and invalid_password", () => {
    loginPageObjects.loginOnSite("teste@teste123.com", "teste");
  });

  it("Then I can see the fail login alert", () => {
    loginPageObjects.spanInvalidLoginValidation();
  });
});

describe("Login on Site without inform email or password", () => {
  it("Given I access the site login page", () => {
    loginPageObjects.visitSite();
  });

  it("I enter empty_email and empty_password", () => {
    loginPageObjects.loginButton();
  });

  it("I can see the fail login alert by required fields", () => {
    loginPageObjects.spanRequiredErrorValidation();
  });
});
