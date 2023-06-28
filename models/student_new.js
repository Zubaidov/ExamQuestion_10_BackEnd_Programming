const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creditAmount: { type: Number, required: true },
    point: { type: Number, required: true },
});

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    pid: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    semester: { type: String, required: true },
    gpa: { type: Number, required: true },
    subjects: [subjectSchema],
});

module.exports = mongoose.model('Student', studentSchema);
