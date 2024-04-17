# Katalog Kolekcji Filmów

Katalog Kolekcji Filmów to aplikacja webowa, która pozwala użytkownikom na przeglądanie, dodawanie i zarządzanie ich kolekcją ulubionych filmów, jak również na dodawanie recenzji.

## Spis treści

- [Funkcjonalności](#funkcjonalności)
- [Instrukcje obsługi](#instrukcje-obslugi)
- [Technologie](#technologie)

## Funkcjonalności

- Przeglądanie listy dodanych filmów wraz ze szczegółami.
- Dodawanie nowych filmów do kolekcji.
- Oznaczanie filmów jako obejrzane.
- Edycja szczegółów filmu.
- Usuwanie filmów z kolekcji (pojedyńczo lub wszystkich na raz).
- Dodawanie recenzji do filmów.
- Wyświetlanie recenzji dla poszczególnych filmów.

## Technologie

- Node.js
- Express.js
- EJS
- PostgreSQL
- CSS + HTML


## Instrukcje obsługi

Aby uruchomić aplikację lokalnie, należy:

1. Sklonować repozytorium: git clone https://github.com/BartoszChmura/Katalog-Kolekcji-Filmow.git
2. Zainstalować zależności przy pomocy npm.
3. Utworzyć baze danych PostgreSQL i odpowiednio skonfigurować moduł db.js (username, password, nazwa bazy danych, port na którym działa baza danych).
4. Stworzyć tablice w bazie danych poniższymi zapytaniami SQL:
    CREATE TABLE movies (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        director VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL,
        watched BOOLEAN DEFAULT false
    );

    CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        content TEXT,
        movie_id INTEGER NOT NULL,
        username VARCHAR(255),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
        FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
    );
5. Uruchomić program na domyślnym porcie 3000 przy pomocy: node app.js
6. Gotowe!   

