import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

class Header extends React.Component {
  render() {
      return (
        <div className="HEADER"> 
          <ul>
              <li>Social Media</li>
              <ul>
                  <li><a href="">Twitter</a></li>
                  <li><a href="">Github</a></li>
                  <li><a href="">Linkedin</a></li>
                  <li><a href="">YouTube</a></li>
              </ul>
              <li><a href="">Contact me </a></li>
          </ul>
        </div>
      )
  }
}
