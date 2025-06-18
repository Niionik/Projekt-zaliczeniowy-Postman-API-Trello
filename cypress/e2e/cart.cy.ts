import { selectors } from '../support/selectors';

describe('Funkcjonalność koszyka', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('powinno dodać produkt do koszyka', () => {
        // Czekamy na załadowanie produktów
        cy.get('.product-list').should('be.visible');
        
        // Znajdujemy pierwszy produkt i dodajemy go do koszyka
        cy.get('.product-list').first().within(() => {
            cy.get('.productcart').click();
        });
        
        // Sprawdzamy czy produkt został dodany do koszyka
        cy.get(selectors.header.cartButton).click();
        cy.get('.product-list').should('be.visible');
    });

    it('powinno zaktualizować ilość produktu w koszyku', () => {
        // Najpierw dodajemy produkt
        cy.get('.product-list').first().within(() => {
            cy.get('.productcart').click();
        });

        // Przechodzimy do koszyka i aktualizujemy ilość
        cy.get(selectors.header.cartButton).click();
        cy.get('input[name="quantity"]').first().clear().type('2');
        cy.get('button[title="Update"]').first().click();
        cy.get('input[name="quantity"]').first().should('have.value', '2');
    });

    it('powinno usunąć produkt z koszyka', () => {
        // Najpierw dodajemy produkt
        cy.get('.product-list').first().within(() => {
            cy.get('.productcart').click();
        });

        // Przechodzimy do koszyka i usuwamy produkt
        cy.get(selectors.header.cartButton).click();
        cy.get('a[title="Remove"]').first().click();
        cy.contains('Your shopping cart is empty').should('be.visible');
    });
}); 