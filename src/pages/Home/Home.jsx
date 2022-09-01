import { useState, useEffect } from 'react';
import Box from 'components/Box';
import { TrendingItem } from './Home.styled';
import * as theMoviedbAPI from 'services/themoviedb-api';

function Home() {
  const [answer, setAnswer] = useState(null);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    theMoviedbAPI.fetchTrending().then(setAnswer);
  }, []);

  useEffect(() => {
    if (!answer) {
      return;
    }
    setTrending(
      answer.data.results.map(({ id, title }) => {
        return {
          id,
          title,
        };
      })
    );
  }, [answer]);

  if (!trending) {
    return;
  }

  return (
    <Box as="main">
      <Box as="nav" display="flex" flexDirection="column">
        <ul>
          {trending.map(({ id, title }) => (
            <li key={id}>
              <TrendingItem key={id} to={`movies/${id}`}>
                {title}
              </TrendingItem>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default Home;
