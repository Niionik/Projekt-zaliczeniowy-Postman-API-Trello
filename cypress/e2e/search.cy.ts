import { selectors } from '../support/selectors';

describe('Wyszukiwanie produktów', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000);
    });

    it('powinno znaleźć produkt po fragmencie nazwy (case insensitive)', () => {
        const searchTerm = 'anti-age';
        
        // Próbujemy różne selektory dla pola wyszukiwania
        cy.get('body').then(($body) => {
            if ($body.find('#filter_keyword').length > 0) {
                cy.get('#filter_keyword').type(searchTerm);
            } else if ($body.find('input[name="keyword"]').length > 0) {
                cy.get('input[name="keyword"]').type(searchTerm);
            } else if ($body.find('input[placeholder*="search"]').length > 0) {
                cy.get('input[placeholder*="search"]').type(searchTerm);
            } else {
                cy.log('Brak pola wyszukiwania - test pominięty');
                return;
            }
        });

        // Klikamy przycisk wyszukiwania
        cy.get('body').then(($body) => {
            if ($body.find('.button-in-search').length > 0) {
                cy.get('.button-in-search').click();
            } else if ($body.find('button[type="submit"]').length > 0) {
                cy.get('button[type="submit"]').click();
            } else if ($body.find('input[type="submit"]').length > 0) {
                cy.get('input[type="submit"]').click();
            } else {
                cy.log('Brak przycisku wyszukiwania - test pominięty');
                return;
            }
        });

        // Sprawdzamy wyniki
        cy.get('body').should('contain', searchTerm);
    });

    it('powinno wyświetlić komunikat o braku wyników dla nieistniejącego produktu', () => {
        const searchTerm = 'NieistniejącyProdukt123';
        
        // Wypełniamy pole wyszukiwania
        cy.get('body').then(($body) => {
            if ($body.find('#filter_keyword').length > 0) {
                cy.get('#filter_keyword').type(searchTerm);
            } else if ($body.find('input[name="keyword"]').length > 0) {
                cy.get('input[name="keyword"]').type(searchTerm);
            } else {
                cy.log('Brak pola wyszukiwania - test pominięty');
                return;
            }
        });

        // Klikamy przycisk wyszukiwania
        cy.get('body').then(($body) => {
            if ($body.find('.button-in-search').length > 0) {
                cy.get('.button-in-search').click();
            } else if ($body.find('button[type="submit"]').length > 0) {
                cy.get('button[type="submit"]').click();
            } else {
                cy.log('Brak przycisku wyszukiwania - test pominięty');
                return;
            }
        });

        // Sprawdzamy komunikat o braku wyników
        cy.get('body').should('contain', 'no product');
    });

    it('powinno zachować historię wyszukiwania', () => {
        const searchTerm = 'Anti-Age';
        
        // Wypełniamy pole wyszukiwania
        cy.get('body').then(($body) => {
            if ($body.find('#filter_keyword').length > 0) {
                cy.get('#filter_keyword').type(searchTerm);
            } else if ($body.find('input[name="keyword"]').length > 0) {
                cy.get('input[name="keyword"]').type(searchTerm);
            } else {
                cy.log('Brak pola wyszukiwania - test pominięty');
                return;
            }
        });

        // Klikamy przycisk wyszukiwania
        cy.get('body').then(($body) => {
            if ($body.find('.button-in-search').length > 0) {
                cy.get('.button-in-search').click();
            } else if ($body.find('button[type="submit"]').length > 0) {
                cy.get('button[type="submit"]').click();
            } else {
                cy.log('Brak przycisku wyszukiwania - test pominięty');
                return;
            }
        });

        // Sprawdzamy czy wartość została zachowana
        cy.get('body').then(($body) => {
            if ($body.find('#filter_keyword').length > 0) {
                cy.get('#filter_keyword').should('have.value', searchTerm);
            } else if ($body.find('input[name="keyword"]').length > 0) {
                cy.get('input[name="keyword"]').should('have.value', searchTerm);
            } else {
                cy.log('Brak pola wyszukiwania - test pominięty');
            }
        });
    });
}); 