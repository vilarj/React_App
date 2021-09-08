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
        <h1>About Me</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <h1>Professional Life</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <h1>Most Recent Project</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
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
        <h3 className="social-media"> Social Media </h3>
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
