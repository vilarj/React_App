import React from 'react'
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
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

class Body extends React.Component {
  render () {
    return (
      <div className="BODY">
        <h1></h1>
      </div>
    )
  }
}

class Footer extends React.Component {
  render () {
    return (
      <div className="FOOTER">
        <ul>
          <a><SocialIcon url="https://twitter.com/vilarjimenez"/></a>
          <a><SocialIcon url="https://github.com/vilarj"/></a>
          <a><SocialIcon url="https://linkedin.com/in/vilarjimenez"/></a>
          <a><SocialIcon url="https://www.youtube.com/channel/UCUU4YkLRdT-xnuybPSMJLpQ"/></a>
          <a><SocialIcon url="https://discord.com/channels/@Vilarj#2029"/></a>
        </ul>
      </div>
    )
  }
}
