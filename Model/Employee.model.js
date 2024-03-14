const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    mName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    // Age min: 18 and max: 50
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50,
    },
    address: {
        type: String,
        required: true
    },
    employee_id: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Employee = mongoose.model('employee_informations', EmployeeSchema);
module.exports = Employee;