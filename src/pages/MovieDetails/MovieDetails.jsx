
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import * as theMoviedbAPI from 'services/themoviedb-api';
const MovieDetails = () => {
  const { moviesId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  const [answer, setAnswer] = useState(null);
  const [trending, setTrending] = useState(null);
  
  
  useEffect(() => {
    theMoviedbAPI.fetchDetails(moviesId).then(setAnswer);
  }, [moviesId]);


  useEffect(() => {

  }, [answer]);

  console.log(answer);
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
  if (!trending) {
    return null;
  }

  const { id, name } = customer;
  const backLinkHref = location.state?.from ?? '/customers';


  const poster_path = 'https://image.tmdb.org/t/p/w500/' + answer.data.poster_path;
  const title = answer.data.title;
  const vote_average = answer.data.vote_average;
  const overview = Math.round(answer.data.overview*10);
  const genres = answer.data.genres.map(
    ({ name }) => {
      return {
          name,
      };
    }
  )
  .join(', ');  




  return (




    
    
    <main>
      <Link to={backLinkHref}>Back to customers</Link>
      <p>id: {id}</p>
      <p>Username: {name}</p>
    </main>
  );
};



export default MovieDetails;
