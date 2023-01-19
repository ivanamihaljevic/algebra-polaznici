// import student from './Module_1.js';
let student = require('./Module_1.js');

let studentClass = {
    getClass: function() {
        student.getInfo();
    }
}

console.log(studentClass.getClass());
