import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

import About from './Sites/About'

function App() {
  return (
    <Router> 

      <div className='App'> 
        <Header />
        <Body />
        <Footer />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>

      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
