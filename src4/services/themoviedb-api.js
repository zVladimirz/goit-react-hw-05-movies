// 084cf52144da2088710eab4f1395e18f

// get-trending
// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://api.themoviedb.org/3/trending/movie/week?api_key=084cf52144da2088710eab4f1395e18f

// search-movies
// поиск кинофильма по ключевому слову на странице фильмов.
// https://api.themoviedb.org/3/search/movie?api_key=084cf52144da2088710eab4f1395e18f&language=en-US&query=dog&page=1

// get-movie-details
// запрос полной информации о фильме для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=084cf52144da2088710eab4f1395e18f&language=en-US
// https://api.themoviedb.org/3/movie/829560?api_key=084cf52144da2088710eab4f1395e18f&language=en-US

// get-movie-credits
// запрос информации о актёрском составе для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=084cf52144da2088710eab4f1395e18f&language=en-US
// https://api.themoviedb.org/3/movie/829560/credits?api_key=084cf52144da2088710eab4f1395e18f&language=en-US

// get-movie-reviews
// запрос обзоров для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=084cf52144da2088710eab4f1395e18f&language=en-US&page=1
// https://api.themoviedb.org/3/movie/829560/reviews?api_key=084cf52144da2088710eab4f1395e18f&language=en-US&page=1

// 504949
// 420818
// 272

const axios = require('axios');


const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '084cf52144da2088710eab4f1395e18f';

async function fetchMovie(url = '') {
  try {
    const resp = await axios.get(url);
    return resp;
  } catch (err) {
    // Handle error
    console.log(err);
  }
}



export function fetchTrending() {

  return fetchMovie(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)

}

export function fetchSearch(query = '') {
  return fetchMovie(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);  
}

export function fetchDetails(movie_id = '') {
  return fetchMovie(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`);  
}

export function fetchCredits(movie_id = '') {
  return fetchMovie(`${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`);  
}

export function fetchViews(movie_id = '') {
  return fetchMovie(`${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);  
}

