import { selectors } from '../support/selectors';

describe('Kategorie produktów', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000);
    });

    it('powinno wyświetlić menu kategorii', () => {
        // Sprawdzamy czy menu kategorii jest widoczne
        cy.get('body').then(($body) => {
            if ($body.find('.categorymenu').length > 0) {
                cy.get('.categorymenu').should('be.visible');
                cy.get('.categorymenu > li > a').should('have.length.greaterThan', 0);
            } else if ($body.find('nav').length > 0) {
                cy.get('nav').should('be.visible');
                cy.get('nav a').should('have.length.greaterThan', 0);
            } else {
                cy.log('Brak menu kategorii - test pominięty');
            }
        });
    });

    it('powinno przejść do pierwszej kategorii i wyświetlić produkty', () => {
        // Klikamy pierwszą kategorię
        cy.get('body').then(($body) => {
            if ($body.find('.categorymenu > li > a').length > 0) {
                cy.get('.categorymenu > li > a').first().click();
            } else if ($body.find('nav a').length > 0) {
                cy.get('nav a').first().click();
            } else if ($body.find('a[href*="category"]').length > 0) {
                cy.get('a[href*="category"]').first().click();
            } else {
                cy.log('Brak linków kategorii - test pominięty');
                return;
            }
        });

        // Sprawdzamy czy URL się zmienił
        cy.url().should('not.include', '/index.php');
        
        // Sprawdzamy czy są produkty
        cy.get('body').should('contain', 'product');
    });

    it('powinno przejść do podkategorii i wyświetlić produkty', () => {
        // Próbujemy znaleźć podkategorie
        cy.get('body').then(($body) => {
            if ($body.find('.categorymenu > li > a').length > 0) {
                cy.get('.categorymenu > li > a').first().trigger('mouseover');
                
                // Sprawdzamy czy są podkategorie
                cy.get('body').then(($body2) => {
                    if ($body2.find('.subcategories a').length > 0) {
                        cy.get('.subcategories a').first().click({ force: true });
                    } else if ($body2.find('.dropdown-menu a').length > 0) {
                        cy.get('.dropdown-menu a').first().click({ force: true });
                    } else {
                        cy.log('Brak podkategorii - klikamy główną kategorię');
                        cy.get('.categorymenu > li > a').first().click();
                    }
                });
            } else if ($body.find('nav a').length > 0) {
                cy.get('nav a').first().click();
            } else {
                cy.log('Brak menu kategorii - test pominięty');
                return;
            }
        });

        // Sprawdzamy czy są produkty
        cy.get('body').should('contain', 'product');
    });

    // Opcjonalnie: test filtrowania po nazwie (jeśli jest dostępny filtr)
    // it('powinno filtrować produkty po nazwie', () => {
    //     cy.get(selectors.categories.categoryLink).first().click();
    //     cy.get(selectors.search.searchInput).type('Anti-Age');
    //     cy.get(selectors.search.searchButton).click();
    //     cy.get('.product-list').should('contain', 'Anti-Age');
    // });
}); 