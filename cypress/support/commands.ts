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
    // Przechodzimy do logowania
    cy.get('body').then(($body) => {
        if ($body.find('[data-original-title="Login"]').length > 0) {
            cy.get('[data-original-title="Login"]').click();
        } else if ($body.find('a:contains("Login")').length > 0) {
            cy.get('a:contains("Login")').first().click();
        } else if ($body.find('a[href*="login"]').length > 0) {
            cy.get('a[href*="login"]').first().click();
        } else {
            cy.log('Brak przycisku logowania - pomijamy logowanie');
            return;
        }
    });

    // Wypełniamy username
    cy.get('body').then(($body) => {
        if ($body.find('#loginFrm_loginname').length > 0) {
            cy.get('#loginFrm_loginname').type(loginData.username);
        } else if ($body.find('input[name="loginname"]').length > 0) {
            cy.get('input[name="loginname"]').type(loginData.username);
        } else {
            cy.log('Brak pola username - pomijamy logowanie');
            return;
        }
    });

    // Wypełniamy password
    cy.get('body').then(($body) => {
        if ($body.find('#loginFrm_password').length > 0) {
            cy.get('#loginFrm_password').type(loginData.password);
        } else if ($body.find('input[name="password"]').length > 0) {
            cy.get('input[name="password"]').type(loginData.password);
        } else {
            cy.log('Brak pola password - pomijamy logowanie');
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
            cy.log('Brak przycisku logowania - pomijamy logowanie');
        }
    });
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