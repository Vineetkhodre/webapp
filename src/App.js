import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nevbar from './Navbar';

function App() {
  return (
    <>
    <Nevbar/>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/service" component={Service}/>
     <Route exact path="/contact" component={Contact}/>
     <Redirect to="/" />
    </Switch>
    </>
   
  );
}

export default App;
