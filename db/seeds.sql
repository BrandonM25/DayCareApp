-- Creates new rows containing data in all named columns --
INSERT INTO parents
    (username, password, first_name, last_name, spouse_id, email, street, city, state, zip, phone, emergency_name, emergency_phnum)
VALUES
    ('michelle123', 'won123_12', 'Michelle', 'Johnson', 1, 'michelle123@yahoo.com', '1234 Main Street', 'Atlanta', 'GA', 32223, '404-234-5678', 'Deloris Miller', '404-456-7890');

INSERT INTO parents
    (username, password, first_name, last_name, spouse_id, email, street, city, state, zip, phone, emergency_name, emergency_phnum)
VALUES
    ('john123', 'jon123_12', 'John', 'Johnson', 1, 'john123@yahoo.com', '1234 Main Street', 'Atlanta', 'GA', 32223, '404-234-5600', 'Jerri Miller', '404-456-7000');

-- Creates new rows containing data in all named columns --
INSERT INTO children
    (first_name, last_name, birth_date, sex, parent1_id, parent2_id, allergies, allergy1, allergy2)
VALUES
    ('Jason', 'Johnson', '2018-1-11', 'M', 1, 2, true, 'peanut', 'cabbage');

INSERT INTO children
    (first_name, last_name, birth_date, sex, parent1_id, parent2_id, allergies, allergy1, allergy2)
VALUES
    ('Tom', 'Johnson', '2018-2-11', 'M', 1, 2, true, 'jelly', 'oranges');


