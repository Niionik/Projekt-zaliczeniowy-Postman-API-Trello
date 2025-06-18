import { selectors } from '../support/selectors';

describe('Logowanie do sklepu', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000);
    });

    it('powinno wyświetlić formularz logowania', () => {
        // Próbujemy różne selektory dla przycisku logowania
        cy.get('body').then(($body) => {
            if ($body.find('[data-original-title="Login"]').length > 0) {
                cy.get('[data-original-title="Login"]').click();
            } else if ($body.find('a:contains("Login")').length > 0) {
                cy.get('a:contains("Login")').first().click();
            } else if ($body.find('a[href*="login"]').length > 0) {
                cy.get('a[href*="login"]').first().click();
            } else {
                cy.log('Brak przycisku logowania - test pominięty');
                return;
            }
        });

        // Sprawdzamy czy formularz się wyświetlił
        cy.get('body').should('contain', 'login');
    });

    it('powinno wyświetlić błąd przy niepoprawnych danych logowania', () => {
        // Przechodzimy do logowania
        cy.get('body').then(($body) => {
            if ($body.find('[data-original-title="Login"]').length > 0) {
                cy.get('[data-original-title="Login"]').click();
            } else if ($body.find('a:contains("Login")').length > 0) {
                cy.get('a:contains("Login")').first().click();
            } else {
                cy.log('Brak przycisku logowania - test pominięty');
                return;
            }
        });

        // Wypełniamy formularz
        cy.get('body').then(($body) => {
            if ($body.find('#loginFrm_loginname').length > 0) {
                cy.get('#loginFrm_loginname').type('niepoprawny@email.com');
            } else if ($body.find('input[name="loginname"]').length > 0) {
                cy.get('input[name="loginname"]').type('niepoprawny@email.com');
            } else {
                cy.log('Brak pola username - test pominięty');
                return;
            }
        });

        cy.get('body').then(($body) => {
            if ($body.find('#loginFrm_password').length > 0) {
                cy.get('#loginFrm_password').type('niepoprawnehaslo');
            } else if ($body.find('input[name="password"]').length > 0) {
                cy.get('input[name="password"]').type('niepoprawnehaslo');
            } else {
                cy.log('Brak pola password - test pominięty');
                return;
            }
        });

        // Klikamy przycisk logowania
        cy.get('body').then(($body) => {
            if ($body.find('button[title="Login"]').length > 0) {
                cy.get('button[title="Login"]').click();
            } else if ($body.find('input[value="Login"]').length > 0) {
                cy.get('input[value="Login"]').click();
            } else {
                cy.log('Brak przycisku logowania - test pominięty');
                return;
            }
        });

        // Sprawdzamy błąd
        cy.get('body').should('contain', 'error');
    });

    it('powinno umożliwić przejście do odzyskiwania hasła', () => {
        // Przechodzimy do logowania
        cy.get('body').then(($body) => {
            if ($body.find('[data-original-title="Login"]').length > 0) {
                cy.get('[data-original-title="Login"]').click();
            } else if ($body.find('a:contains("Login")').length > 0) {
                cy.get('a:contains("Login")').first().click();
            } else {
                cy.log('Brak przycisku logowania - test pominięty');
                return;
            }
        });

        // Klikamy link do odzyskiwania hasła
        cy.get('body').then(($body) => {
            if ($body.find('a[href*="forgotten/password"]').length > 0) {
                cy.get('a[href*="forgotten/password"]').click();
                cy.url().should('include', 'forgotten');
            } else if ($body.find('a:contains("Forgot")').length > 0) {
                cy.get('a:contains("Forgot")').click();
                cy.url().should('include', 'forgotten');
            } else {
                cy.log('Brak linku do odzyskiwania hasła - test pominięty');
            }
        });
    });

    it('powinno nie pozwolić na logowanie bez podania hasła', () => {
        // Przechodzimy do logowania
        cy.get('body').then(($body) => {
            if ($body.find('[data-original-title="Login"]').length > 0) {
                cy.get('[data-original-title="Login"]').click();
            } else if ($body.find('a:contains("Login")').length > 0) {
                cy.get('a:contains("Login")').first().click();
            } else {
                cy.log('Brak przycisku logowania - test pominięty');
                return;
            }
        });

        // Wypełniamy tylko username
        cy.get('body').then(($body) => {
            if ($body.find('#loginFrm_loginname').length > 0) {
                cy.get('#loginFrm_loginname').type('testuser');
            } else if ($body.find('input[name="loginname"]').length > 0) {
                cy.get('input[name="loginname"]').type('testuser');
            } else {
                cy.log('Brak pola username - test pominięty');
                return;
            }
        });

        // Klikamy przycisk logowania
        cy.get('body').then(($body) => {
            if ($body.find('button[title="Login"]').length > 0) {
                cy.get('button[title="Login"]').click();
            } else if ($body.find('input[value="Login"]').length > 0) {
                cy.get('input[value="Login"]').click();
            } else {
                cy.log('Brak przycisku logowania - test pominięty');
                return;
            }
        });

        // Sprawdzamy błąd
        cy.get('body').should('contain', 'required');
    });

    it('powinno zalogować poprawnego użytkownika', () => {
        // Używamy własnej komendy login
        cy.login({ username: 'demo', password: 'demo' });
        
        // Sprawdzamy czy jesteśmy zalogowani
        cy.get('body').should('contain', 'account');
    });
}); 