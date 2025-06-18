import { selectors } from '../support/selectors';

describe('Nawigacja po stronie', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('powinno przejść do kategorii Skincare', () => {
        cy.get(selectors.categories.categoryLink)
            .contains('Skincare')
            .click();
        cy.url().should('include', 'skincare');
        cy.get('.maintext').should('contain', 'Skincare');
    });

    it('powinno wyświetlić podkategorie po najechaniu na kategorię', () => {
        cy.get(selectors.categories.categoryLink)
            .contains('Skincare')
            .trigger('mouseover');
        cy.get(selectors.categories.submenu).should('be.visible');
    });

    it('powinno przejść do strony głównej po kliknięciu logo', () => {
        cy.get('.logo').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
    });

    it('powinno wyświetlić menu konta po zalogowaniu', () => {
        cy.login({
            username: 'testuser@example.com',
            password: 'testpassword'
        });
        cy.get(selectors.header.accountButton).click();
        cy.get(selectors.account.welcomeMessage).should('be.visible');
    });
}); 