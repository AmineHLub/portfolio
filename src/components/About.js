import React from 'react';
import '../general-styling/about.css';

export default function About() {
  return (
    <section id="about" className="about-me-container d-flex">
      <h2>About</h2>
      <div className="info-and-resume">
        <p>
          I can help you build a product , feature or
          website Look through some of my work and experience!
          If you like what you see and have a project
          you need coded, don&apos;t hestiate to contact me.
        </p>
        <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1QCCGYmClCusXQpCrbPcAi_CyktSNMAJUyRjZCRZOdrc/edit">Resume</a>
      </div>
      <div className="seperator" />
    </section>
  );
}
