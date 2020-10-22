import React, { useState } from "react";
import Headers from "./components/Header/Headers";
import Movies from "./components/Movies/Movies";
import AboutMovies from "./components/Movies/AboutMovies";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";

const App = () => {
  const [movieMy, setMovieMy] = useState({});

  const history = useHistory();

  const handleTakeItem = (movie, title) => {
    setMovieMy(movie);
    history.push(`/movies/${title}`);
  };

  const closeHandlerItem = (movie) => {
    setMovieMy(movie);
    history.push(`/movies`);
  };

  return (
    <div>
      <Headers />
      <Switch>
        <Route
          exact
          path="/movies"
          render={() => {
            return <Movies handleTakeItem={handleTakeItem} />;
          }}
        />
        <Route
          exact
          path="/movies/:id"
          render={() => {
            return (
              <AboutMovies
                closeHandlerItem={closeHandlerItem}
                movieMy={movieMy}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
