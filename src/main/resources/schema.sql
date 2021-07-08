DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    "name" VARCHAR(25),
    surname VARCHAR(25),
    age INT);