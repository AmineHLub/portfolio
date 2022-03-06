/* eslint-disable react/prop-types */
import React from 'react';
import ruby from '../../assets/stack/ruby.png';
import rails from '../../assets/stack/rails.png';
import sql from '../../assets/stack/sql.png';
import postgres from '../../assets/stack/postgres.png';

export default function Backend({ stackStateBack }) {
  return (
    <div className={`backend-fixed ${stackStateBack}`}>
      <h2 className="stack-header">Backend stack</h2>
      <div className="stack-container-front d-flex">
        <img src={ruby} alt="ruby-logo" />
        <img src={rails} alt="rails-logo" />
        <img src={sql} alt="sql-logo" />
        <img src={postgres} alt="postgres-logo" />
      </div>
    </div>
  );
}
