import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as theMoviedbAPI from 'services/themoviedb-api';

function Reviews() {
  const { moviesId } = useParams();
  const [answer, setAnswer] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    theMoviedbAPI.fetchViews(moviesId).then(setAnswer);
  }, [moviesId]);

  useEffect(() => {
    if (!answer) {
      return;
    }

    setReviews(
      answer.data.results
        .map(({ author, content }) => {
          return {
            author,
            content,
          };
        })
        .sort(function (a, b) {
          const nameA = a.content.toLowerCase(),
            nameB = b.content.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
    );
  }, [answer]);

  if (!reviews) {
    return;
  }
  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }
  return (
    <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <p>
            <b>Author: {author}</b>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
