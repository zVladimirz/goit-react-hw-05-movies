import { useState, useEffect } from 'react';
import Box from 'components/Box';
import { TrendingItem } from './Home.styled';

import * as theMoviedbAPI from 'services/themoviedb-api';

// https://image.tmdb.org/t/p/w500/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg
// https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg

function Home() {
    const [answer, setAnswer] = useState(null);
  
    const [trending, setTrending] = useState(null);
  


  useEffect(() => {
    theMoviedbAPI.fetchTrending().then(setAnswer);
  }, []);

  useEffect(() => {
    if (!answer) {return};
    setTrending(
    answer.data.results.map(
      ({ id, title }) => {
        return {
            id, title,
        };
      }
    )   )    
        // answer.data.results);
  }, [answer]);



  if (!trending) {return};


  return (
    <Box as="header" p={4} height="100vh" borderRight="1px solid black">
      <Box as="nav" display="flex" flexDirection="column">
        {trending.map(({id, title }) => (
          <TrendingItem key={id} to={`movies/${id}`} >
            {title}
          </TrendingItem>
        ))}
      </Box>
    </Box>
  );
  }


export default Home;