import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(nasaData => setData(nasaData));
  }, []);

  if (!data) {
    return <div>Loading NASA data</div>;
  }

  const { title, url, explanation } = data;
  return (
    <div className="app">
      <h1>NASA picture of the day</h1>
      <h3>{title}</h3>
      <img src={url} alt={title} width={500} />
      <p>{explanation}</p>
    </div>
  );
}
