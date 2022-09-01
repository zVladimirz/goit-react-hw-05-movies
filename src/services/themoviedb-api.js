const axios = require('axios');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '084cf52144da2088710eab4f1395e18f';

async function fetchMovie(url = '') {
  try {
    const resp = await axios.get(url);
    return resp;
  } catch (err) {
    // Handle error
    console.log(url);

    console.log(err);
  }
}

export function fetchTrending() {
  return fetchMovie(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
}

export function fetchSearch(query = '') {
  return fetchMovie(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
}

export function fetchDetails(movie_id = '') {
  return fetchMovie(
    `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchCredits(movie_id = '') {
  return fetchMovie(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchViews(movie_id = '') {
  return fetchMovie(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
