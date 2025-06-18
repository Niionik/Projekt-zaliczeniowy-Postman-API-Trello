import { selectors } from './selectors';

// Interfejs dla danych logowania
interface LoginData {
    username: string;
    password: string;
}

// Interfejs dla danych produktu
interface ProductData {
    name: string;
    price: string;
}

// Interfejs dla danych wyszukiwania
interface SearchData {
    term: string;
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(loginData: LoginData): Chainable<void>;
            addProductToCart(productData: ProductData): Chainable<void>;
            searchProduct(searchData: SearchData): Chainable<void>;
        }
    }
}

// Komenda do logowania
Cypress.Commands.add('login', (loginData: LoginData) => {
    cy.get(selectors.header.loginButton).click();
    cy.get(selectors.login.usernameInput).type(loginData.username);
    cy.get(selectors.login.passwordInput).type(loginData.password);
    cy.get(selectors.login.loginButton).click();
});

// Komenda do dodawania produktu do koszyka
Cypress.Commands.add('addProductToCart', (productData: ProductData) => {
    cy.get('.product-list').first().within(() => {
        cy.get('.productcart').click();
    });
});

// Komenda do wyszukiwania produktu
Cypress.Commands.add('searchProduct', (searchData: SearchData) => {
    cy.get(selectors.search.searchInput).type(searchData.term);
    cy.get(selectors.search.searchButton).click();
}); 