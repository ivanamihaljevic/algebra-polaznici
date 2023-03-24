import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TrendingList, CustomNavbar, Footer, Movies, Rate } from './Components'; // Custom import for components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CustomNavbar />
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='/trending/movies/week' element={<TrendingList type='movie' timeline='week' name='movies' />} />
      <Route path='/trending/movies/day' element={<TrendingList type='movie' timeline='day' name='movies' />} />

      <Route path='/trending/tv/week' element={<TrendingList type='tv' timeline='week' name='TV shows' />} />
      <Route path='/trending/tv/day' element={<TrendingList type='tv' timeline='day' name='TV shows' />} />

      <Route path='/trending/people/week' element={<TrendingList type='person' timeline='week' name='people' />} />
      <Route path='/trending/people/day' element={<TrendingList type='person' timeline='day' name='people' />} />

      <Route path='/trending/all/week' element={<TrendingList type='all' timeline='week' name='' />} />
      <Route path='/trending/all/day' element={<TrendingList type='all' timeline='day' name='' />} />

      <Route path='/view/tv/:tvID' element={<TrendingList type='all' timeline='day' name='' />} />
      <Route path='/view/movie/:movieID' element={<Movies />} />
      <Route path='/view/person/:personID' element={<TrendingList type='all' timeline='day' name='' />} />

      <Route path='rate/movie/:contentID' element={<Rate name='movie' type='movie' />} />
      <Route path='rate/tv/:contentID' element={<Rate name='TV show' type='tv' />} />

    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);