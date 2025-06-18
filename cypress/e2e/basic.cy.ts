describe('Podstawowe funkcjonalności strony', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('powinno załadować stronę główną', () => {
        cy.title().should('contain', 'A place to practice');
        cy.url().should('include', 'automationteststore.com');
    });

    it('powinno wyświetlić nagłówek strony', () => {
        cy.get('header').should('be.visible');
        cy.get('nav').should('be.visible');
    });

    it('powinno wyświetlić stopkę strony', () => {
        cy.get('footer').should('be.visible');
    });

    it('powinno zawierać linki nawigacyjne', () => {
        cy.get('a').should('have.length.greaterThan', 0);
    });

    it('powinno wyświetlić formularz wyszukiwania', () => {
        cy.get('input[type="text"]').should('be.visible');
    });
}); 