import { selectors } from '../support/selectors';

describe('Funkcjonalność koszyka', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('powinno dodać produkt do koszyka', () => {
        const productName = 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15';
        cy.get(selectors.products.productCard)
            .contains(productName)
            .parent()
            .parent()
            .within(() => {
                cy.get(selectors.products.addToCartButton).click();
            });
        
        cy.get(selectors.header.cartButton).click();
        cy.get(selectors.cart.cartItems).should('contain', productName);
    });

    it('powinno zaktualizować ilość produktu w koszyku', () => {
        // Najpierw dodajemy produkt
        const productName = 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15';
        cy.get(selectors.products.productCard)
            .contains(productName)
            .parent()
            .parent()
            .within(() => {
                cy.get(selectors.products.addToCartButton).click();
            });

        // Przechodzimy do koszyka i aktualizujemy ilość
        cy.get(selectors.header.cartButton).click();
        cy.get(selectors.cart.quantityInput).clear().type('2');
        cy.get(selectors.cart.updateButton).click();
        cy.get(selectors.cart.quantityInput).should('have.value', '2');
    });

    it('powinno usunąć produkt z koszyka', () => {
        // Najpierw dodajemy produkt
        const productName = 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15';
        cy.get(selectors.products.productCard)
            .contains(productName)
            .parent()
            .parent()
            .within(() => {
                cy.get(selectors.products.addToCartButton).click();
            });

        // Przechodzimy do koszyka i usuwamy produkt
        cy.get(selectors.header.cartButton).click();
        cy.get(selectors.cart.removeButton).click();
        cy.get(selectors.cart.cartItems).should('not.contain', productName);
    });
}); 