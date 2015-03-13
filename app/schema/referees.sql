DROP TABLE IF EXISTS referees;

CREATE TABLE referees (
  id INT AUTO_INCREMENT NOT NULL, 
  name VARCHAR(80) DEFAULT NULL, 
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

INSERT INTO referees VALUES
(1,'Art Hundiak'),
(2,'Ted Queen'),
(3,'Scott Haynes');

-- ---------------------------------------------------------------
DROP TABLE IF EXISTS persons;

CREATE TABLE persons (
  id INT AUTO_INCREMENT NOT NULL, 
  guid VARCHAR(40) NOT NULL, 
  name_full   VARCHAR(80) DEFAULT NULL, 
  name_first  VARCHAR(40) DEFAULT NULL, 
  name_last   VARCHAR(40) DEFAULT NULL, 
  name_nick   VARCHAR(40) DEFAULT NULL, 
  name_middle VARCHAR(40) DEFAULT NULL, 
  email VARCHAR(80) DEFAULT NULL, 
  phone VARCHAR(20) DEFAULT NULL, 
  gender VARCHAR(1) DEFAULT NULL,
  dob DATE DEFAULT NULL, 
  address_city VARCHAR(40) DEFAULT NULL, 
  address_state VARCHAR(10) DEFAULT NULL, 
  address_zipcode VARCHAR(10) DEFAULT NULL, 
  notes LONGTEXT DEFAULT NULL, 
  status VARCHAR(20) NOT NULL, 
  verified VARCHAR(20) DEFAULT NULL, 
  UNIQUE INDEX UNIQ_A25CC7D32B6FCFB2 (guid), 
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
