import { useState } from 'react';
import '../mobile-styling/my-stack.css';
import Backend from './stack/Backend';
import Frontend from './stack/Frontend';
import close from '../assets/close.png';

function Stack() {
  const [stackStateFront, setStackStateF] = useState('');
  const [stackStateBack, setStackStateB] = useState('');
  const closeStack = () => {
    if (stackStateFront.includes('show-nav')) {
      setStackStateF('close-nav');
    }
    if (stackStateBack.includes('close-nav')) {
      setStackStateB('show-nav');
    }
  };
  return (
    <section className="stack-container">
      <h2 className="my-stack-header">My stack</h2>
      <div className="my-stack-container d-flex">
        <button type="button" onClick={() => setStackStateF('show-nav closable')}>Frontend</button>
        <button type="button" onClick={() => setStackStateB('close-nav closable')}>Backend</button>
      </div>
      <Backend stackStateBack={stackStateBack} />
      <Frontend stackStateFront={stackStateFront} />
      { stackStateFront.includes('closable')
      || stackStateBack.includes('closable') ? (
        <button className="close-btn" type="button" onClick={() => closeStack()}>
          <img src={close} alt="close-modal-icon" />
        </button>
        ) : null}
    </section>
  );
}

export default Stack;
