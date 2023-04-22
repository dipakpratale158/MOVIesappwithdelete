// import React, { useState, useEffect, useCallback } from "react";

// import MoviesList from "./components/MoviesList";
// import AddMovie from "./components/AddMovie";
// import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [retryCount, setRetryCount] = useState(0);

//   const fetchMoviesHandler = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         "https://reactreq-default-rtdb.firebaseio.com/movies.json"
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong! Retrying...");
//       }

//       const data = await response.json();

//       const loadedMovies = [];

//       for (const key in data) {
//         loadedMovies.push({
//           id: key,
//           title: data[key].title,
//           openingText: data[key].openingText,
//           releaseDate: data[key].releaseDate
//         });
//       }

//       setMovies(loadedMovies);
//       setRetryCount(0);
//     } catch (error) {
//       setError(error.message);
//       setRetryCount((prevRetryCount) => prevRetryCount + 1);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchMoviesHandler();
//   }, [fetchMoviesHandler]);

//   const addMovieHandler = useCallback(async (movie) => {
//     const response = await fetch(
//       "https://reactreq-default-rtdb.firebaseio.com/movies.json",
//       {
//         method: "POST",
//         body: JSON.stringify(movie),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   }, []);

//   let content = <p>Found no movies.</p>;

//   if (movies.length > 0) {
//     content = <MoviesList movies={movies} />;
//   }

//   if (error) {
//     content = (
//       <React.Fragment>
//         <p>{error}</p>
//         <button onClick={() => setRetryCount(1)}>Retry</button>
//       </React.Fragment>
//     );
//   }

//   if (isLoading) {
//     content = <p>Loading...</p>;
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <AddMovie onAddMovie={addMovieHandler} />
//       </section>
//       <section>
//         {content}
//         {retryCount > 0 && (
//           <button onClick={() => setRetryCount(0)}>Cancel Retry</button>
//         )}
//       </section>
//     </React.Fragment>
//   );
// }

// export default App;

//adding functionality//////////////////////
// import React, { useState, useEffect, useCallback } from "react";

// import MoviesList from "./components/MoviesList";
// import AddMovie from "./components/AddMovie";
// import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [retryCount, setRetryCount] = useState(0);

//   const fetchMoviesHandler = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         "https://reactreq-default-rtdb.firebaseio.com/movies.json"
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong! Retrying...");
//       }

//       const data = await response.json();

//       const loadedMovies = [];

//       for (const key in data) {
//         loadedMovies.push({
//           id: key,
//           title: data[key].title,
//           openingText: data[key].openingText,
//           releaseDate: data[key].releaseDate
//         });
//       }

//       setMovies(loadedMovies);
//       setRetryCount(0);
//     } catch (error) {
//       setError(error.message);
//       setRetryCount((prevRetryCount) => prevRetryCount + 1);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchMoviesHandler();
//   }, [fetchMoviesHandler]);

//   async function addMovieHandler(movie) {
//     try {
//       const response = await fetch(
//         "https://reactreq-default-rtdb.firebaseio.com/movies.json",
//         {
//           method: "POST",
//           body: JSON.stringify(movie),
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }
//       const data = await response.json();
//       const newMovie = {
//         id: data.name,
//         ...movie
//       };
//       setMovies((prevMovies) => [...prevMovies, newMovie]);
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   let content = <p>Found no movies.</p>;

//   if (movies.length > 0) {
//     content = <MoviesList movies={movies} />;
//   }

//   if (error) {
//     content = (
//       <React.Fragment>
//         <p>{error}</p>
//         <button onClick={() => setRetryCount(1)}>Retry</button>
//       </React.Fragment>
//     );
//   }

//   if (isLoading) {
//     content = <p>Loading...</p>;
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <AddMovie onAddMovie={addMovieHandler} />
//       </section>
//       <section>
//         {content}
//         {retryCount > 0 && (
//           <button onClick={() => setRetryCount(0)}>Cancel Retry</button>
//         )}
//       </section>
//     </React.Fragment>
//   );
// }

// export default App;

/////delete button
import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [retryCount, setRetryCount] = useState(0);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://reactreq-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong! Retrying...");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }

      setMovies(loadedMovies);
      setRetryCount(0);
    } catch (error) {
      setError(error.message);
      setRetryCount((prevRetryCount) => prevRetryCount + 1);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    try {
      const response = await fetch(
        "https://reactreq-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const newMovie = {
        id: data.name,
        ...movie
      };
      setMovies((prevMovies) => [...prevMovies, newMovie]);
    } catch (error) {
      setError(error.message);
    }
  }

  async function deleteMovieHandler(movieId) {
    try {
      const response = await fetch(
        `https://reactreq-default-rtdb.firebaseio.com/movies/${movieId}.json`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== movieId)
      );
    } catch (error) {
      setError(error.message);
    }
  }
  async function editMovieHandler(movieId, updatedMovie) {
    try {
      const response = await fetch(
        `https://reactreq-default-rtdb.firebaseio.com/movies/${movieId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedMovie),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const updatedMovies = movies.map((movie) =>
        movie.id === movieId ? { ...movie, ...updatedMovie } : movie
      );
      setMovies(updatedMovies);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="App">
      <AddMovie onAddMovie={addMovieHandler} />
      {!isLoading && movies.length > 0 && (
        <MoviesList
          movies={movies}
          onDelete={deleteMovieHandler}
          onEdit={editMovieHandler}
        />
      )}
      {!isLoading && movies.length === 0 && !error && <p>No movies found.</p>}
      {!isLoading && error && (
        <p>
          Error occurred! Retry count: {retryCount}. Error message: {error}
        </p>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
