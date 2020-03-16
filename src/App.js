import React from 'react';
import './App.css';
//#region Component Imports
import Navbar from './components/navbar/MyNavbar.js';
import Calc from './components/weight-calc/WeightCalc.js';
import Home from './components/homepage/Home.js';
import Boat from './components/boat/Boat.js';
//#endregion
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar/>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/calculator" component={Calc}/>
            <Route path="/boat" component={Boat}/>
          </main>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
