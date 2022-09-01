import  Searchbar  from 'components/Searchbar';

import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import * as theMoviedbAPI from 'services/themoviedb-api';



const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  const [answer, setAnswer] = useState(null);  

  


  useEffect(() => {
      theMoviedbAPI.fetchSearch(filterParam).then(setAnswer);
    }, [filterParam]);
  
    useEffect(() => {
      if (!answer) {return};
      setMovies(
      answer.data.results.map(
        ({ id, title }) => {
          return {
              id, title,
          };
        }
      )   )    
          // answer.data.results);
    }, [answer]);

    




  const handleSubmit = ({ searchQueryForm }, { resetForm }) => {

    setSearchParams(searchQueryForm !== '' ? { filter: searchQueryForm.toLowerCase() } : {});


    // resetForm();
  };

  // console.log(filterParam.toLowerCase());
  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      {movies.length>0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies; 