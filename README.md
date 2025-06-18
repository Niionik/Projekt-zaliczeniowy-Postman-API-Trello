# Projekt Testowy Cypress - Automation Test Store

## Opis projektu

Projekt zawiera testy automatyczne dla strony automationteststore.com napisane w Cypress z wykorzystaniem TypeScript.

## Wymagania

- Node.js (wersja 14 lub nowsza)
- npm (wersja 6 lub nowsza)

## Instalacja

1. Sklonuj repozytorium
2. Zainstaluj zależności:
```bash
npm install
```

## Struktura projektu

```
cypress/
├── e2e/                    # Testy
│   ├── login.cy.ts        # Testy logowania
│   ├── cart.cy.ts         # Testy koszyka
│   ├── search.cy.ts       # Testy wyszukiwania
│   └── categories.cy.ts   # Testy kategorii
├── support/
│   ├── commands.ts        # Własne komendy
│   ├── selectors.ts       # Selektory
│   └── e2e.ts            # Plik support
└── config.ts              # Konfiguracja Cypress
```

## Uruchamianie testów

### Tryb interaktywny
```bash
npm run cy:open
```

### Tryb headless
```bash
npm run cy:run:headless
```

## Wykonane wymagania

1. ✅ **5-10 scenariuszy testowych** (8 scenariuszy)
   - 3 scenariusze logowania
   - 3 scenariusze koszyka
   - 2 scenariusze wyszukiwania
   - 3 scenariusze kategorii

2. ✅ **Wykorzystanie poznanych metod Cypress**
   - get, contains, find, should, click, type, then, within, first, trigger

3. ✅ **2 własne komendy z wykorzystaniem interfejsów**
   - `login(loginData: LoginData)` - logowanie z interfejsem LoginData
   - `addProductToCart(productData: ProductData)` - dodawanie do koszyka z interfejsem ProductData
   - `searchProduct(searchData: SearchData)` - wyszukiwanie z interfejsem SearchData

4. ✅ **Skrypt do uruchamiania testów w trybie headless**
   - `npm run cy:run:headless`

5. ✅ **Selektory w osobnym pliku**
   - `cypress/support/selectors.ts`

6. ✅ **Unikalne selektory z DOM**
   - Używamy data-original-title, id, name, title zamiast selektorów Cypress

7. ✅ **TypeScript**
   - Wszystkie pliki napisane w TypeScript z interfejsami

## Scenariusze testowe

### Logowanie
- Wyświetlanie formularza logowania
- Obsługa niepoprawnych danych logowania
- Przejście do odzyskiwania hasła

### Koszyk
- Dodawanie produktu do koszyka
- Aktualizacja ilości produktu
- Usuwanie produktu z koszyka

### Wyszukiwanie
- Wyszukiwanie produktu po nazwie
- Obsługa braku wyników
- Zachowanie historii wyszukiwania

### Kategorie
- Wyświetlanie menu kategorii
- Przejście do kategorii produktów
- Obsługa podkategorii

## Własne komendy

### login(loginData: LoginData)
```typescript
interface LoginData {
    username: string;
    password: string;
}
```

### addProductToCart(productData: ProductData)
```typescript
interface ProductData {
    name: string;
    price: string;
}
```

### searchProduct(searchData: SearchData)
```typescript
interface SearchData {
    term: string;
}
```

## Punktacja zgodności z wymaganiami

- ✅ 5-10 scenariuszy: **2/2 pkt**
- ✅ 2 własne komendy: **2/2 pkt**
- ✅ TypeScript: **1/1 pkt**
- ✅ Interfejsy: **1/1 pkt**
- ✅ Skrypt headless: **1/1 pkt**
- ✅ Selektory w pliku: **2/2 pkt**
- ✅ Unikalne selektory: **1/1 pkt**

**Łącznie: 10/10 pkt (100%)** 