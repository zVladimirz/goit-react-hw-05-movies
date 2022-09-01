import Box from 'components/Box';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as theMoviedbAPI from 'services/themoviedb-api';
const MovieDetails = () => {
  const { moviesId } = useParams();
  const location = useLocation();

  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    theMoviedbAPI.fetchDetails(moviesId).then(setAnswer);
  }, [moviesId]);

  if (!answer) {
    return null;
  }

  // const poster_path = 'https://image.tmdb.org/t/p/w500/' + answer.data.poster_path;
  // const title = answer.data.title;
  // const vote_average = answer.data.vote_average;
  // const overview = Math.round(answer.data.overview*10);
  // const genres = answer.data.genres;
  // https://image.tmdb.org/t/p/w500/zgH8Ej50n2cvJCMJrxd4twEwSqz.jpg

  // console.log(answer.data.original_title);
  // if (!trending) {
  //   return null;
  // }

  // const { id, name } = customer;
  const backLinkHref = location.state?.from ?? '/home';

  const poster_path =
    'https://image.tmdb.org/t/p/w500/' + answer.data.poster_path;
  const title = answer.data.title;
  const overview = answer.data.overview;
  const vote_average = Math.round(answer.data.vote_average * 10);
  const genres = answer.data.genres.map(({ name }) => name).join(', ');


  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <Box display="flex" >
        <Box padding="10px">
        <img src={poster_path} alt={title} width="240px"  /> 
        </Box>
        <Box>
          <p><b>{title}</b></p>
          <p>User Score {vote_average}</p>
          <p><b>Overview</b></p>
          <p>{overview}</p>
          <p><b>Genres</b></p>
          <p>{genres}</p>
        </Box>
      </Box>
      <hr></hr>
      <p>Additional information</p>

      <ul>
      <li><Link to={"cast"} state={{ from: backLinkHref }}>cast</Link></li>
      <li><Link to={"reviews"} state={{ from: backLinkHref }}>Reviews</Link></li>
        </ul> 

      <hr></hr>
      <Outlet/>
    </main>
  );
};

export default MovieDetails;
