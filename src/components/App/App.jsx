import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Box from 'components/Box';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import { Container, Header, Logo, Link } from './App.styled';

import * as theMoviedbAPI from '../../services/themoviedb-api';


import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';


// 084cf52144da2088710eab4f1395e18f

// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://api.themoviedb.org/3/trending/movie/week?api_key=084cf52144da2088710eab4f1395e18f

// поиск кинофильма по ключевому слову на странице фильмов.
// https://api.themoviedb.org/3/search/movie?api_key=084cf52144da2088710eab4f1395e18f&language=en-US&query=dog&page=1

// запрос полной информации о фильме для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=084cf52144da2088710eab4f1395e18f&language=en-US

// запрос информации о актёрском составе для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=084cf52144da2088710eab4f1395e18f&language=en-US

// запрос обзоров для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=084cf52144da2088710eab4f1395e18f&language=en-US&page=1

const axios = require('axios');

function App() {
  return (
    <Box position="relative" as="main">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies" element={<div>Movies</div>} /> */}
        <Route path="/movies/:moviesId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
