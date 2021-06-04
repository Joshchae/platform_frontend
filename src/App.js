import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import './index.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Footer from './components/footer/Footer';

import ConflictHome from './pages/conflict/ConflictHome';
import ConflictHome2 from './pages/conflict/ConflictHome2';

import ClimateMigrationHome from './pages/climatemigration/ClimateMigrationHome';
import ClimateMigrationMap from './pages/climatemigration/ClimateMigrationMap';
import ClimateMigrationSubmit from './pages/climatemigration/ClimateMigrationSubmit';
import ClimateMigrationFacts from './pages/climatemigration/ClimateMigrationFacts';
// import ClimateMigrationStory from './pages/climatemigration/ClimateMigrationStory';
// import NotFound from './components/NotFound';
import './scss/custom.scss';


//++++++++++++ Routes ++++++++++++++++++++++
function App() {
  return (
    <div className="App">
     {/* <Logo /> */}
     <Header />
     <main> 
      <Switch>
        <Route exact path="/" >
          <Home />
          {/* <Route component={Home} path="/home" /> */}
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

        <Route path="/ClimateMigration/Map">
          <ClimateMigrationMap />
        </Route>
        <Route path="/ClimateMigration/Submit">
          <ClimateMigrationSubmit />
        </Route>
        <Route path="/ClimateMigration/Facts">
          <ClimateMigrationFacts />
        </Route>
        <Route path="/ClimateMigration">
          <ClimateMigrationHome />
        </Route>
         {/* <Route path="/ClimateMigration/Map/stories/:id">
          <ClimateMigrationStory /> 
        </Route> */}
        {/* Conflicts */}
          <Route path="/Conflicts2">
            <ConflictHome2 />
          </Route>
          <Route path="/Conflicts">
            <ConflictHome />
          </Route>
          <Route component={Home} path="/home" />
          {/* <Route component={NotFound} /> */}
        </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;
