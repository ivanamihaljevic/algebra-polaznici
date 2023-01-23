function EmployeeDetails() {
    var name = 'Nino';
    var age = 25;
    var designation = 'Developer';
    var salary = 10000;

    var calculateBonus = function (amount) {
        return salary = salary + amount;
    }

    return {
        name: name,
        age: age,
        designation: designation,
        calculateBonus: calculateBonus,
    }
}

var newEmployee = EmployeeDetails();
var bonus = newEmployee.calculateBonus(1000);