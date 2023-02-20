import './App.css';

// Default export
import Person from './Components/Person';
import Student from './Components/Student';
import Program from './Components/Program';
import Grades from './Components/Grades';

// Named export
import { sum, greet, student } from './Components/Utility';

// Import everything as something
import * as all from './Components/Utility';

function App() {
  return (
    <div>
      <Student />
      <Program />
      <Grades />
      Person is: {Person.name}
      <br />
      Sum is: {sum(5, 5)}
      <br />
      {greet('Nino')}
      Student: {student}
      <br />
      Sum is: {all.sum(10, all.num1)}
    </div>
  );
}

export default App;