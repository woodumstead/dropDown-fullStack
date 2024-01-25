------ create db
CREATE DATABASE stateinfo;
\c stateinfo

------ drop and add new tables -----
DROP TABLE IF EXISTS states;
CREATE TABLE states(
    id SERIAL NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    bird VARCHAR(255) UNIQUE NOT NULL,
    flower VARCHAR(255) UNIQUE NOT NULL,
    tree VARCHAR(255) UNIQUE NOT NULL,
    significant_event VARCHAR(255) UNIQUE NOT NULL,
    PRIMARY KEY(id)
    
);


------- DATA ENTRIES ---------
INSERT INTO states(name, bird, flower, tree, significant_event) VALUES ('Alabama', 'Yellowhammer', 'Camelia', 'Southern Long Leaf Pine', '1958 - Huntsville-built "Jupiter" rocket places American satellite in orbit around Earth.');
INSERT INTO states(name, bird, flower, tree, significant_event) VALUES ('Alaska', 'Willow Ptarmagin', 'Alpine Forget-Me-Not', 'Sitka Spruce', '1964 The most severe earthquake recorded in North America hits Alaska, with a magnitude of 9.2, 115 die.');
INSERT INTO states(name, bird, flower, tree, significant_event) VALUES ('Arizona', 'Cactus Wren', 'Saguaro Cactus Blossom', 'Palo Verde', '2014 flash floods with over 5 inches of rain at Chandler and Mesa');
INSERT INTO states(name, bird, flower, tree, significant_event) VALUES ('Arkansas', 'Northern Mocking Bird', 'Apple Blossom', 'Pine', ' April 10th 1929, Arkansas only known F5 tornado touches down');
