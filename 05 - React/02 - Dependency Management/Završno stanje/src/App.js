import React from 'react';
import randomstring from 'randomstring';
import giveMeAJoke from 'give-me-a-joke';
import moment from 'moment';

export default function App() {

  return <div>
    {randomstring.generate()}

    {giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
    })}

    {moment("20111031", "YYYYMMDD").fromNow()}
  
  </div>;
}
