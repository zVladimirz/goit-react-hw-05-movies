import { useState, useEffect } from 'react';
import Box from 'components/Box';
import { TrendingItem } from './Reviews.styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';


import * as theMoviedbAPI from 'services/themoviedb-api';

// https://image.tmdb.org/t/p/w500/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg
// https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg

function Reviews() {
  const { moviesId } = useParams();

    const [answer, setAnswer] = useState(null);
  
    const [reviews, setReviews] = useState(null);
  
    const [trending, setTrending] = useState(null);


  useEffect(() => {
    theMoviedbAPI.fetchViews(moviesId).then(setAnswer);
  }, [moviesId]);

  useEffect(() => {
    if (!answer) {return};

    
    setReviews(
      answer.data.results.map(
        ({ author, content }) => {
          return {
            author, content,
          };
        }
      )
      .sort(function(a, b){
        const nameA=a.content.toLowerCase(), nameB=b.content.toLowerCase();
        if (nameA < nameB) 
        return -1;
        if (nameA > nameB)  
        return 1;
        return 0;
      })
   )    
  }, [answer]);

//   console.log(reviews);

// return;

  // data.cast
  // character: "Hal"
  // name: "Timothée Chalamet"
  // original_name: "Timothée Chalamet"
  // profile_path: "/giE73ickrnQ61qK8iRdOSv9Oj2Z.jpg"
  // https://image.tmdb.org/t/p/w500/giE73ickrnQ61qK8iRdOSv9Oj2Z.jpg

  
// console.log(cast);

//   return;
  if (!reviews) {
    return};
if (reviews.length===0 ){
  return(
    <p>We don't have any reviews for this movie.</p>

  );  
}
  return (
    <ul>
 {reviews.map(({author, content  }) => (
    <li key= {author}>
        <p><b>Author: {author}</b></p>
        <p>{content}</p>
    </li>

        ))}

      </ul> 
  );
  }


export default Reviews;