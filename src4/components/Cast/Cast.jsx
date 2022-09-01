import { useState, useEffect } from 'react';
import Box from 'components/Box';
import { TrendingItem } from './Cast.styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';


import * as theMoviedbAPI from 'services/themoviedb-api';

// https://image.tmdb.org/t/p/w500/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg
// https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg

function Cast() {
  const { moviesId } = useParams();

    const [answer, setAnswer] = useState(null);
  
    const [cast, setCast] = useState(null);
  
    const [trending, setTrending] = useState(null);


  useEffect(() => {
    theMoviedbAPI.fetchCredits(moviesId).then(setAnswer);
  }, [moviesId]);

  useEffect(() => {
    if (!answer) {return};

    
    setCast(
      answer.data.cast.map(
        ({ id, character, name, profile_path }) => {
          return {
            id, character, name, profile_path,
          };
        }
      )
      .sort(function(a, b){
        const nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB) 
        return -1;
        if (nameA > nameB)  
        return 1;
        return 0;
      })
   )    
  }, [answer]);

  // data.cast
  // character: "Hal"
  // name: "Timothée Chalamet"
  // original_name: "Timothée Chalamet"
  // profile_path: "/giE73ickrnQ61qK8iRdOSv9Oj2Z.jpg"
  // https://image.tmdb.org/t/p/w500/giE73ickrnQ61qK8iRdOSv9Oj2Z.jpg

  
// console.log(cast);

//   return;
  if (!cast) {return};


  return (
    <ul>
 {cast.map(({id, character, name, profile_path  }) => (
    <li key= {id}>
        <img src={"https://image.tmdb.org/t/p/w500" + profile_path} alt={name} width="64px"  /> 
        <p>{name}</p>
        <p>{character}</p>
    </li>

        ))}

      </ul> 
  );
  }


export default Cast;