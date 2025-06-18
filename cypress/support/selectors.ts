export const selectors = {
    // Nagłówek
    header: {
        loginButton: '[data-original-title="Login"]',
        accountButton: '[data-original-title="My Account"]',
        cartButton: '[data-original-title="Shopping Cart"]',
        wishlistButton: '[data-original-title="Wishlist"]'
    },
    
    // Formularz logowania
    login: {
        usernameInput: '#loginFrm_loginname',
        passwordInput: '#loginFrm_password',
        loginButton: 'button[title="Login"]',
        forgotPasswordLink: 'a[href*="forgotten/password"]'
    },
    
    // Produkty - zaktualizowane selektory
    products: {
        productCard: '.product-list .product-item',
        productName: '.productname',
        productPrice: '.price',
        addToCartButton: '.productcart',
        addToWishlistButton: '.wishlist'
    },
    
    // Koszyk - zaktualizowane selektory
    cart: {
        cartItems: '.product-list',
        quantityInput: 'input[name="quantity"]',
        updateButton: 'button[title="Update"]',
        removeButton: 'a[title="Remove"]',
        checkoutButton: '#cart_checkout1'
    },
    
    // Kategorie
    categories: {
        menu: '.categorymenu',
        submenu: '.subcategories',
        categoryLink: '.categorymenu > li > a'
    },
    
    // Wyszukiwarka
    search: {
        searchInput: '#filter_keyword',
        searchButton: '.button-in-search',
        searchResults: '.product-list'
    },
    
    // Konto użytkownika
    account: {
        welcomeMessage: '.subtext',
        editAccountButton: 'a[href*="account/edit"]',
        orderHistoryButton: 'a[href*="account/history"]',
        logoutButton: 'a[href*="account/logout"]'
    }
}; 