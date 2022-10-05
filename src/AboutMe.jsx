import React from 'react';
import macMemoji from './assets/macMemoji.png';
import javascript from './assets/javascript.png';
import react from './assets/react.png';

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="am-container">
        <span className='am-left'>
          <span><img className="am-picture" src={macMemoji} alt='PNG'></img>
          Jason Gates
          gatesjasond@gmail.com
          281-799-5626
          @JasonDGates
          Linkedin
          <img src={javascript} alt='PNG'></img>
          JavaScript
          <img src={react} alt='PNG'></img>
          React
          </span>
        </span>
        <p className='am-right'>
          I am an experienced Software Engineer with a strong background in building scalable full stack web applications. I thrive in collaborative team environments and pride myself on writing readable, DRY, and modular code.
          <br />
          <br />
          Prior to my journey into Software Engineering I was in communications in the US Army. After my service I spent 17 years providing commercial and residential IT support to clients. My background gives me a unique perspective of both the client experience and the business impact on development.
          <br />
          <br />
          I am seeking new opportunities where I can be an immediate contributor while growing as an Engineer.
        </p>
      </div>
    </div>
  );
}
