import React from 'react';
import { Switch, Route } from "react-router-dom";

import About from './components/about/About';
import Home from './components/home/Home';
// import NotFound from './components/NotFound';

import ConflictHome from './components/conflict/ConflictHome';

import ClimateMigrationHome from './components/climatemigration/ClimateMigrationHome';
import ClimateMigrationMap from './components/climatemigration/ClimateMigrationMap';
import ClimateMigrationSubmit from './components/climatemigration/ClimateMigrationSubmit';
import ClimateMigrationBackground from './components/climatemigration/ClimateMigrationBackground';
// import ClimateMigrationStory from './components/climatemigration/ClimateMigrationStory';

import './App.css';
import './index.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        {/* Climate Migration */}
          <Route path="/ClimateMigration/Background">
            <ClimateMigrationBackground />
          </Route>
          <Route path="/ClimateMigration/Map">
            <ClimateMigrationMap />
          </Route>
          {/* <Route path="/ClimateMigration/Map/stories/:id">
            <ClimateMigrationStory /> 
          </Route> */}00v
          <Route path="/ClimateMigration/Map/stories/submit">
            <ClimateMigrationSubmit />
          </Route>
          <Route path="/ClimateMigration">
            <ClimateMigrationHome />
          </Route>
        {/* Conflicts */}
          <Route path="/Conflicts">
            <ConflictHome />
          </Route>
        
          <Route component={Home} path="/home" />
          {/* <Route component={NotFound} /> */}

        </Switch>
      </main>
      
      <br/><footer>Footer @Copyright Joldon, Franzi, Josh</footer>

    </div>
  );
}

export default App;
