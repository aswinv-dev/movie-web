import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDisplayPage from "../components/MovieDisplayPage";
import CreateMoviePage from "../components/CreateMovie/Page";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <MovieDisplayPage />
          </Route>
          <Route path="/create">
            <CreateMoviePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
