# BDD using NodeJs and cucumberJs for Student Record
## Make sure you have Node.js and postgres installed

### setting up the table and columns in the DB after postgres is installed locally 
```
open SQL Shell (psql) and setup all login and password
CREATE DATABASE students;
\c students                        ### to connect DB 'students' to postgre 
CREATE TABLE students(
    ID SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    classgroup VARCHAR (255),
    studentnumber INT,
    nationality VARCHAR(255));
INSERT INTO students (firstname, lastname, classgroup, studentnumber, nationality)
VALUES ('firstN', 'lname', '3A', 223445, 'Singapore');
```

#### clone ~ install ~ start
```
git clone https://github.com/gracielp/bdd_cucumber_restapi.git  ### clone the repo
npm i                                                           ### this would install all dependencies
npm start                                                      ### to start the server listener
npm run student-record-bdd                                    ### this would run the BDD cucumber tests
```


##### html report formatting 
https://www.npmjs.com/package/cucumber-html-reporter