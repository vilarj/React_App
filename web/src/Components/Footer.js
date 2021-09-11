import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
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

export default Footer