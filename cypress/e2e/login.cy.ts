import { selectors } from '../support/selectors';

describe('Logowanie do sklepu', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('powinno wyświetlić formularz logowania', () => {
        cy.get(selectors.header.loginButton).click();
        cy.get(selectors.login.usernameInput).should('be.visible');
        cy.get(selectors.login.passwordInput).should('be.visible');
        cy.get(selectors.login.loginButton).should('be.visible');
    });

    it('powinno wyświetlić błąd przy niepoprawnych danych logowania', () => {
        cy.get(selectors.header.loginButton).click();
        cy.get(selectors.login.usernameInput).type('niepoprawny@email.com');
        cy.get(selectors.login.passwordInput).type('niepoprawnehaslo');
        cy.get(selectors.login.loginButton).click();
        cy.contains('Error: Incorrect login or password provided.').should('be.visible');
    });

    it('powinno umożliwić przejście do odzyskiwania hasła', () => {
        cy.get(selectors.header.loginButton).click();
        cy.get(selectors.login.forgotPasswordLink).click();
        cy.url().should('include', 'forgotten/password');
    });
}); 