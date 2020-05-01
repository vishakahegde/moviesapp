import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import { NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavLink
          exact={true}
          to="/discover"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        />
      </NavBar>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
