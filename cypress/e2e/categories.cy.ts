import { selectors } from '../support/selectors';

describe('Kategorie produktów', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('powinno wyświetlić menu kategorii', () => {
        cy.get(selectors.categories.menu).should('be.visible');
        cy.get(selectors.categories.categoryLink).should('have.length.greaterThan', 0);
    });

    it('powinno przejść do kategorii produktów', () => {
        cy.get(selectors.categories.categoryLink).first().click();
        cy.url().should('not.include', '/index.php');
        cy.get('.product-list').should('be.visible');
    });

    it('powinno wyświetlić podkategorie po najechaniu na kategorię', () => {
        cy.get(selectors.categories.categoryLink).first().trigger('mouseover');
        cy.get(selectors.categories.submenu).should('be.visible');
    });
}); 