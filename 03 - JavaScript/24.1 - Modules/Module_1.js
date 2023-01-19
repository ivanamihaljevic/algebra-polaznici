let student = {
    name: 'Nino',
    grade: 'Senior',
    getInfo: function(){
        console.log(`Student ${this.name} is a ${this.grade}`)
    }
}

module.exports = student;
//export default student;