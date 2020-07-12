import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './App.css';
 import Slider from './components/home/slider/Slider'
import Header from './components/home/appbar/Header';
import Home from './components/home/Home';
import Footer from './components/home/footer/Footer';
import AboutUs from './components/About/AboutUs';
import Read from './components/Read/Read';
 

function App() {

  return (
    <Router>
    <div>
    <Header/>

    <Route exact path="/"  component={Home}/>
    <Route path="/read" component={Read}/>
    <Route path="/about" component={AboutUs}/>
 
   
    <Footer/>
    </div>
    </Router>
  );
  
}

export default App;
