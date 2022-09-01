import { useState, useEffect } from 'react';
import Box from 'components/Box';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';




import * as theMoviedbAPI from '../../services/themoviedb-api';

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
  const [showLoader, setShowLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [answer, setAnswer] = useState(null);
  
  const [trending, setTrending] = useState(null);
  const [search, setSearch] = useState(null);
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const [views, setViews] = useState(null);
  // const [trending, setTrending] = useState(null);


// 504949
// 420818
// 272



  // useEffect(() => {
  //   theMoviedbAPI.fetchTrending().then(setAnswer);
  // }, []);

  // useEffect(() => {
  //   if (!answer) {return};
  //   setTrending(answer.data.results);
  // }, [answer]);



  // useEffect(() => {
  //   theMoviedbAPI.fetchSearch('dog').then(setAnswer);
  // }, []);

  // useEffect(() => {
  //   if (!answer) {return};
  //   setSearch(answer.data.results);
  // }, [answer]);

  


  // useEffect(() => {
  //   theMoviedbAPI.fetchDetails('477510').then(setAnswer);
  // }, []);


  // useEffect(() => {
  //   if (!answer) {return};
  //   const moveDetails={};
  //   moveDetails.poster_path = answer.data.poster_path;

  //   setDetails(
  //     moveDetails

  //   );
  // }, [answer]);


  // useEffect(() => {
  //   theMoviedbAPI.fetchCredits('477510').then(setAnswer);
  // }, []);


  // useEffect(() => {
  //   if (!answer) {return};
  //   const moveCredits= 
  //   answer.data.cast.map(
  //     ({ character, name, profile_path }) => {
  //       return {
  //         character, name, profile_path,
  //       };
  //     }
  //   );  
    
 
  //   setCredits(
  //     moveCredits

  //   );
  // }, [answer]);



  useEffect(() => {
    theMoviedbAPI.fetchViews('420818').then(setAnswer);
  }, []);


  useEffect(() => {
    if (!answer) {return};

    // const moveCredits= 
    // answer.data.cast.map(
    //   ({ character, name, profile_path }) => {
    //     return {
    //       character, name, profile_path,
    //     };
    //   }
    // );  
    const moveCredits=answer.data.results;
 
    setViews(
      moveCredits
    );
  }, [answer]);





  if (!views) {return};

  return (
    <Box position="relative" as="main">

        <div>
        {console.log (views)}


        </div>
    </Box>
  );
}

export default App;
