
CREATE TABLE bookInventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    author VARCHAR (50),
    yearPublished INTEGER,
    genre TEXT [],
    checkedOut BOOLEAN,
    image VARCHAR(200)
);

INSERT INTO bookInventory (
    name VARCHAR (50),
    author VARCHAR (50),
    yearPublished INTEGER,
    genre TEXT [],
    checkedOut BOOLEAN,
    image VARCHAR(200)
)
VALUES 
('Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones', 'James Clear', 2018, '{"Self-help book"}', TRUE, 'https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg'),
("Harry Potter and the Sorcerer's Stone", 'J. K. Rowling', 1997, '{"Novel", "Fantasy Fiction", "High fantasy"}', TRUE, 'https://media.harrypotterfanzone.com/sorcerers-stone-us-childrens-edition.jpg'),
("Bud, Not Buddy", 'Paul Curtis', 1999, '{"Historical Fiction", "Young Adult Literature", ", "Historical Novel"}', TRUE, 'https://m.media-amazon.com/images/I/81iq-CvU+yL._SL1500_.jpg'),
("Hardy Boys 01: the Tower Tresasure", 'Franklin W. Dixon', 1959, '{"Mystery", "Adventure Fiction"}', TRUE, 'https://m.media-amazon.com/images/I/61UcIuu5CWL._SL1200_.jpg');

CREATE TABLE Songs (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    time INTEGER,
    reps INTEGER
)

INSERT INTO Songs (name,time,reps)
VALUES 
('Bring It On Home', 100, 200);