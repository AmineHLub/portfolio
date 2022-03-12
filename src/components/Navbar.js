import React from 'react';
import Scrollspy from 'react-scrollspy';
import '../general-styling/navbar.css';

export default function hey() {
  return (
    <nav className="desktop-navigation">
      <h2>My portfolio</h2>
      <Scrollspy
        items={['home', 'projects', 'about', 'contact']}
        currentClassName="active"
      >
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </Scrollspy>
    </nav>
  );
}
