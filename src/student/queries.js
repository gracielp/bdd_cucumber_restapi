const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students where id = $1";
const getStudentsByClassGroup = 'SELECT * FROM students where classgroup = $1';
const checkStudentNumberExists = "SELECT s FROM students s WHERE s.studentnumber = $1";
const addStudent = 'INSERT INTO students ("firstname", "lastname", "classgroup", "studentnumber", "nationality") VALUES ($1, $2, $3, $4, $5)';
const removeStudentById = "DELETE FROM students where id= $1";
const updateStudentNameById = 'UPDATE students SET "firstname" = $1 WHERE id = $2';
const updateClassGroupById = 'UPDATE students SET "classgroup" = $1 WHERE id = $2';

module.exports = {
    getStudents,
    getStudentsById,
    checkStudentNumberExists,
    addStudent,
    removeStudentById,
    updateStudentNameById,
    updateClassGroupById,
    getStudentsByClassGroup,
};