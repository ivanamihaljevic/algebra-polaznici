import React, { useState, useEffect } from 'react';
import './style.css';

const NASAImage = ({ title, url, explanation, date }) => {
  return (
    <div class='NASAImage'>
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  );
};

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => response.json())
      .then((nasaData) => setData(nasaData));
  }, []);

  if (!data) {
    return <h1>Loading NASA data</h1>;
  }

  const { title, url, explanation, date } = data;

  return (
    <div>
      <h1>NASA picture of the day</h1>
      <NASAImage
        title={title}
        url={url}
        explanation={explanation}
        date={date}
      />
    </div>
  );
}
