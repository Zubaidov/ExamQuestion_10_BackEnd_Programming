const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Retrieve all student records
router.get('/', studentController.getAllStudents);

// Retrieve one student record by ID
router.get('/:id', studentController.getStudentById);

// Add a new student record
router.post('/', studentController.addStudent);

// Update student information
router.put('/:id', studentController.updateStudent);

// Search for students with pagination and filtering
router.get('/search', studentController.searchStudents);

module.exports = router;
