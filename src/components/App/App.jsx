import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Box from 'components/Box';
import { Link } from './App.styled';
import Home from 'pages/Home';


const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

function App() {
  return (
    <Box>
      <Box margin="10px">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <Suspense fallback={null}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:moviesId"
          element={
            <Suspense fallback={null}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={null}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={null}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
