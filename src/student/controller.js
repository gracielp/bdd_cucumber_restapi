const pool = require('../../db');
const queries = require('./queries')

const getStudents = (req, res) => {
   pool.query(queries.getStudents, (error, results) => {
       if (error) throw error;
       res.status(200).json(results.rows);
   });
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        if (error) throw error;
       res.status(200).json(results.rows);
    });
};

const getStudentsByClassGroup = (req, res) => {
    const classgroup = parse(req.params.classgroup)
    pool.query(queries.getStudentsByClassGroup, [classgroup], (error, results) => {
        if (error) throw error;
       res.status(200).json(results.rows);
    });
};
   
const addStudent = (req, res) => {
    const { firstname, lastname, classgroup, studentnumber, nationality } = req.body;
    //check if first name exists
    pool.query(queries.checkStudentNumberExists, [studentnumber], (error, results) => {
        if (results.rows.length) {
            res.send("Student Number already exists!");
        }
    pool.query(queries.addStudent, [firstname, lastname, classgroup, studentnumber, nationality], (error, results) =>{
        if (error) throw error;
        res.status(201).send("Student is Created Successfully!");
  
        })    

    });
};
    
const removeStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    //check if student ID exists
    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound){
            res.send("Student ID doesnt exist: Cannot perform deletion.");
         }

        pool.query(queries.removeStudentById, [id], (error, results) =>{
            if (error) throw error;
            res.status(200).send("Student is removed successfully.");
        }); 
        });
};

const updateStudentNameById = (req, res) => {
    const id = parseInt(req.params.id);
    const { firstname } = req.body;

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
            if (noStudentFound){
                res.send("Student ID doesnt exist: Cannot perform update.");
           }
           //updates by Student's first name 
           pool.query(queries.updateStudentNameById, [firstname, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student's First Name is updated successfully.");
           });
    });
};

const updateClassGroupById = (req, res) => {
    const id = parseInt(req.params.id);
    const { classgroup } = req.body;

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
            if (noStudentFound){
                res.send("Student ID doesnt exist: Cannot perform update.");
           }
           //updates by Student's classgroup
           pool.query(queries.updateClassGroupById, [classgroup, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student's Class Group is updated successfully.");
           });
    });
};


module.exports = {
    getStudents,
    getStudentsById,
    getStudentsByClassGroup,
    addStudent,
    removeStudentById,
    updateStudentNameById,
    updateClassGroupById,
};