import React from 'react';
import { Switch, Route } from "react-router-dom";

import About from './pages/about/About';
import Home from './pages/home/Home';
// import NotFound from './components/NotFound';

import ConflictHome from './pages/conflict/ConflictHome';

import ClimateMigrationHome from './pages/climatemigration/ClimateMigrationHome';
import ClimateMigrationMap from './pages/climatemigration/ClimateMigrationMap';
import ClimateMigrationSubmit from './pages/climatemigration/ClimateMigrationSubmit';
import ClimateMigrationFacts from './pages/climatemigration/ClimateMigrationFacts';
// import ClimateMigrationStory from './pages/climatemigration/ClimateMigrationStory';

import './App.css';
import './index.css';
import Header from './components/Header';



//++++++++++++FETCH BACKEND API+++++++++++++++++

/*useEffect(() => {
  fetch("/api/?")
    .then((res) => res.json ())
    .then((data) => set?(data))
    .catch((error) => console.log(error.message));
}, []);
OR 
const fetchData = async () => {
    await Axios.get(`HEROKU LINK/${name}`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
};*/


//++++++++++++ Routes ++++++++++++++++++++++
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
          <Route path="/ClimateMigration/Map">
            <ClimateMigrationMap />
          </Route>
          <Route path="/ClimateMigration/submit">
            <ClimateMigrationSubmit />
          </Route>
          <Route path="/ClimateMigration/Facts">
            <ClimateMigrationFacts />
          </Route>
          {/* <Route path="/ClimateMigration/Map/stories/:id">
            <ClimateMigrationStory /> 
          </Route> */}
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
