import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <div>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
        <button onClick={() => props.onEdit(props.id)}>Edit</button>
      </div>
    </li>
  );
};

export default Movie;
