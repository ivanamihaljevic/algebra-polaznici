import randomstring from 'randomstring';
import moment from 'moment';

function App() {
  return (
    <div>
      {randomstring.generate()}
      <br/>
      {moment().format("MMMM Do YYYY, h:mm:ss a")}
    </div>
  );
}

export default App;
