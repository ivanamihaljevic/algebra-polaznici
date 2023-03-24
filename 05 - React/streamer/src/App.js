import './App.css';
import Trending from './Components/Trending/Trending';

export default function App() {
  return (
    <div className='main'>
      <div id='hero'>
        <h3 className='trending hero'>Welcome to Streamer&reg;</h3>
        <p className='trending'>Stream everything you want - 24/7.<br />Get <b>unlimited access</b> for 4.99€/month.
          <br />
          <a href='/search' className='custom-button-inverted animated hero-button'>Explore Titles</a>
        </p>
      </div>

      <Trending link='view/movie' type='movie/upcoming' animation='scroll-tray no-text' />
      <Trending link='view/tv' type='trending/tv/week' animation='scroll-tray slow no-text' />
      <Trending link='view/movie' type='trending/movie/week' animation='scroll-tray no-text' />
    </div>
  );
}

