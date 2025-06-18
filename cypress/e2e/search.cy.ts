import { selectors } from '../support/selectors';

describe('Wyszukiwanie produktów', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('powinno znaleźć produkt po nazwie', () => {
        const searchTerm = 'Anti-Age';
        cy.get(selectors.search.searchInput).type(searchTerm);
        cy.get(selectors.search.searchButton).click();
        cy.get(selectors.search.searchResults).should('contain', searchTerm);
    });

    it('powinno wyświetlić komunikat o braku wyników dla nieistniejącego produktu', () => {
        const searchTerm = 'NieistniejącyProdukt123';
        cy.get(selectors.search.searchInput).type(searchTerm);
        cy.get(selectors.search.searchButton).click();
        cy.contains('There is no product that matches the search criteria.').should('be.visible');
    });

    it('powinno zachować historię wyszukiwania', () => {
        const searchTerm = 'Anti-Age';
        cy.get(selectors.search.searchInput).type(searchTerm);
        cy.get(selectors.search.searchButton).click();
        cy.get(selectors.search.searchInput).should('have.value', searchTerm);
    });
}); 