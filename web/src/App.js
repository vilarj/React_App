import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import About from './Sites/About';
import Contact from './Sites/Contact';
import Current_Project from './Sites/Current_Project';
import Resume from './Sites/Resume';

import { EasybaseProvider, useEasybase } from 'easybase-react';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<h1> Hello </h1>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/current_project" component={Current_Project} />
					<Route path="/resume" component={Resume} />
				</Switch>

				<div className="easybase" />

				<Footer />
			</div>
		</Router>
	);
}

const Home = () => <div />;

export default App;
