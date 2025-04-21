import fixtures from "../fixtures/fixtures";
import restEnum from "../fixtures/restEnum";
import userData from "../fixtures/userData";

describe("Login API Tests", () => {
  it("Login with success", () => {
    const requestBody = {
      email: userData.email,
      password: userData.password,
    };

    cy.request({
      method: "POST",
      url: fixtures.baseApiUrl + fixtures.loginEndpoint,
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(restEnum.Success);
      expect(response.body).to.not.null;
      expect(response.body).to.have.property("message");
      expect(response.body).to.have.property("authorization");
      expect(response.body.authorization).to.contains("Bearer");
      assert.equal(response.body.message, fixtures.successLoginMessage);
    });
  });

  it("Login failed by invalid email", () => {
    const requestBody = {
      email: userData.invalidEmail,
      password: userData.password,
    };

    cy.request({
      method: "POST",
      url: fixtures.baseApiUrl + fixtures.loginEndpoint,
      body: requestBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(restEnum.Unauthorized);
      expect(response.body).to.not.null;
      expect(response.body).to.have.property("message");
      assert.equal(response.body.message, fixtures.unauthorizedLoginMessage);
    });
  });

  it("Login failed by invalid password", () => {
    const requestBody = {
      email: userData.email,
      password: userData.invalidPassword,
    };

    cy.request({
      method: "POST",
      url: fixtures.baseApiUrl + fixtures.loginEndpoint,
      body: requestBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(restEnum.Unauthorized);
      expect(response.body).to.not.null;
      expect(response.body).to.have.property("message");
      assert.equal(response.body.message, fixtures.unauthorizedLoginMessage);
    });
  });

  it("Login failed by empty email and password", () => {
    const requestBody = {
      email: userData.emptyEmail,
      password: userData.emptyPassword,
    };

    cy.request({
      method: "POST",
      url: fixtures.baseApiUrl + fixtures.loginEndpoint,
      body: requestBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(restEnum.Bad_Request);
      expect(response.body).to.not.null;
      expect(response.body).to.have.property("email");
      expect(response.body).to.have.property("password");
      assert.equal(response.body.email, fixtures.emptyEmailMessage);
      assert.equal(response.body.password, fixtures.emptyPassWordMessage);
    });
  });
});
