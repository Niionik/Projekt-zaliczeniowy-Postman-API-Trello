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
│   └── search.cy.ts       # Testy wyszukiwania
├── support/
│   ├── commands.ts        # Własne komendy
│   └── selectors.ts       # Selektory
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

1. ✅ 5-10 scenariuszy testowych
2. ✅ Wykorzystanie poznanych metod Cypress
3. ✅ 2 własne komendy z wykorzystaniem interfejsów
4. ✅ Skrypt do uruchamiania testów w trybie headless
5. ✅ Selektory w osobnym pliku
6. ✅ Unikalne selektory z DOM

## Scenariusze testowe

1. Logowanie:
   - Wyświetlanie formularza logowania
   - Obsługa niepoprawnych danych logowania
   - Przejście do odzyskiwania hasła

2. Koszyk:
   - Dodawanie produktu do koszyka
   - Aktualizacja ilości produktu
   - Usuwanie produktu z koszyka

3. Wyszukiwanie:
   - Wyszukiwanie produktu po nazwie
   - Obsługa braku wyników
   - Zachowanie historii wyszukiwania 