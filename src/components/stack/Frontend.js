/* eslint-disable react/prop-types */
import React from 'react';
import reactLogo from '../../assets/stack/react.png';
import html from '../../assets/stack/html.png';
import css from '../../assets/stack/css.png';
import js from '../../assets/stack/js.png';

export default function Frontend({ stackStateFront }) {
  return (
    <div className={`frontend-fixed ${stackStateFront}`}>
      <h2 className="stack-header">Frontend</h2>
      <div className="stack-container-front d-flex">
        <img src={html} alt="html-logo" />
        <img src={css} alt="css-logo" />
        <img src={js} alt="js-logo" />
        <img src={reactLogo} alt="react-logo" />
      </div>
    </div>
  );
}
