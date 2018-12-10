DROP DATABASE IF EXISTS scores_db;
CREATE DATABASE scores_db;
USE scores_db;

CREATE TABLE scores
(
	id int NOT NULL AUTO_INCREMENT,
	player_name varchar(255) NOT NULL,
	score_number int NOT NULL,
	PRIMARY KEY (id)
);
