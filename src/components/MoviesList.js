import React from "react";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

function MoviesList(props) {
  const { movies, onDelete, onEdit } = props;

  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          openingText={movie.openingText}
          releaseDate={movie.releaseDate}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default MoviesList;

// //import React from 'react';
// import classes from './Movie.module.css';

// const Movie = (props) => {

//   const handleDelete = () => {
//     props.onDelete(props.id);
//   }

//   const handleEdit = () => {
//     props.onEdit(props.id);
//   }

//   return (
//     <li className={classes.movie}>
//       <h2>{props.title}</h2>
//       <h3>{props.releaseDate}</h3>
//       <p>{props.openingText}</p>
//       <button onClick={handleDelete}>Delete</button>
//       <button onClick={handleEdit}>Edit</button>
//     </li>
//   );
// };

// export default Movie;
