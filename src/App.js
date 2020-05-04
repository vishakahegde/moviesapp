import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "green",
            }}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>

        <header className="App-header">
          <Switch>
            <Route path="/movies">
              <h1>Movies to Watch</h1>
            </Route>
            <Route exact path="/">
              <h1>My App!</h1>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
