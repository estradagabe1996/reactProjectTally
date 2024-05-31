-- Elaphant SQL link
-- postgres://pnxlypfl:tpD5bwMq_YyFezD6beGMmGxjmuUy3bxk@ruby.db.elephantsql.com/pnxlypfl

CREATE TABLE Songs (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    time INTEGER,
    reps INTEGER
)

INSERT INTO Songs (name,time,reps)
VALUES 
('Bring It On Home', 100, 200);

-- NEW TABLE with users

CREATE TABLE tally (
    id SERIAL PRIMARY KEY,
    username VARCHAR (50),
    password VARCHAR (50),
    songOne VARCHAR (50),
    time INTEGER,
    reps INTEGER
);

INSERT INTO tally (username,password,songOne,time,reps)
VALUES 
('gabedababe', 'test123', 'Bring It On Home', 100, 50),
('notjustinbieber', 'baby123', 'La La Land', 22, 11);