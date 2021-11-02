Feature: Test REST API for Student Enrolment Project

In order to manage student Enrolment
I want to make sure CRUD operation through REST API works successfully
 
    Scenario Outline: Add a New Record of a Student with unique Student Number and Validate 
        Given A new student <request>
        When I send POST request to /api/v1/students
        Then I get response code 201
        Then I should see message <assert_message>
        
        Examples:
             | request | assert_message |
             |{"firstname":"Matt","lastname":"Welch","classgroup":"3A","studentnumber":111123244,"nationality": "Mexico"}  | "Student is Created Successfully!"|


    Scenario Outline: Update existing Record of a Student with unique ID and Validate
        Given A student with ID #<id> to be updated
        When I send PUT request with a <classgroup> to /api/v1/students/class
        Then I get response code 200
        Then I should see message <assert_message>
        
        Examples:
             | id | classgroup          | assert_message |
             | 20 |{"classgroup":"3AF"} | "Student's Class Group is updated successfully."|
             | 26 |{"classgroup":"3A"}  | "Student's Class Group is updated successfully."|

    Scenario Outline: Delete existing Record of a Student with unique ID and Validate
        Given A student with ID #<id> to be deleted
        When I send DELETE request to /api/v1/students
        Then I get response code 200
        Then I should see message <assert_message>
        
        Examples:
             | id | assert_message                                                                                                                      |
             | 34 | "Student is removed successfully."|

    Scenario Outline: Fetch Details of Student given the ID
        Given I have student ID #<id> to view
        When I send GET request to /api/v1/students/fetchStudents/id
        Then I should see the Student Record <record>
        
        Examples:
            | id | record                                                                                                                     |
            | 1 | [{"id":1,"firstname":"Mike","lastname":"Wong","classgroup":"3A","studentnumber":223445,"nationality": "Singapore"}]         |

         