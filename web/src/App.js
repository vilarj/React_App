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
                  <li><a href="https://twitter.com/vilarjimenez">Twitter</a></li>
                  <li><a href="https://github.com/vilarj">Github</a></li>
                  <li><a href="https://linkedin.com/in/vilarjimenez">Linkedin</a></li>
                  <li><a href="https://www.youtube.com/channel/UCUU4YkLRdT-xnuybPSMJLpQ">YouTube</a></li>
              </ul>
              <li><a href="">Contact me </a></li>
              <li><a href="">About me</a></li>
          </ul>
        </div>
      )
  }
}
