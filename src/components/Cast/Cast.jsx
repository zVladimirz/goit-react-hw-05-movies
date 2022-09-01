import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as theMoviedbAPI from 'services/themoviedb-api';

function Cast() {
  const { moviesId } = useParams();
  const [answer, setAnswer] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    theMoviedbAPI.fetchCredits(moviesId).then(setAnswer);
  }, [moviesId]);

  useEffect(() => {
    if (!answer) {
      return;
    }

    setCast(
      answer.data.cast
        .map(({ id, character, name, profile_path }) => {
          return {
            id,
            character,
            name,
            profile_path,
          };
        })
        .sort(function (a, b) {
          const nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
    );
  }, [answer]);

  if (!cast) {
    return;
  }

  return (
    <ul>
      {cast.map(({ id, character, name, profile_path }) => (
        <li key={id}>
          <img
            src={'https://image.tmdb.org/t/p/w500' + profile_path}
            alt={name}
            width="64px"
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
