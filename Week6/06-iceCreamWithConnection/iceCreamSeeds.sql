DROP DATABASE IF EXISTS musicDB;

CREATE DATABASE musicDB;

USE imusicDB;

CREATE TABLE music (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(45) NOT NULL,
  genre VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO music (title, artist, genre)
VALUES ("Buddy Holly", "Weezer", "Rock");

INSERT INTO music (title, artist, genre)
VALUES ("Californiacation", "RHCP", "Rock");

INSERT INTO music (title, artist, genre)
VALUES ("Slow Jams", "Boys II Men", "R&B");

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
