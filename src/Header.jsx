import React from 'react';
import gLogo from './assets/g-logo.svg';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <img src={gLogo} alt="SVG" />
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </div>
  );
}
