import './App.css';

// Default export
// import Person from './Components/Person';
// import Student from './Components/Student';
// import Program from './Components/Program';
// import Grades from './Components/Grades';

// IMPORTANT - Ovo morate znati
// Više importa (redaka) zamijenili smo sa samo jednim importom
import { Student, Program, Grades, Person } from './Components';

// IMPORTANT - Ovo morate znati
// Named export
import { sum, greet, student } from './Helpers/Utility';

// Import everything as something
import * as all from './Helpers/Utility';

function App() {
  return (
    <div>
      <Student />
      {/* <Program />
      <Grades />
      Person is: {Person.name}
      <br />
      Sum is: {sum(5, 5)}
      <br />
      {greet('Nino')}
      Student: {student}
      <br />
      Sum is: {all.sum(10, all.num1)} */}
    </div>
  );
}

export default App;