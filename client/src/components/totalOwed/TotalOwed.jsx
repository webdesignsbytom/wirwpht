import React from 'react';
// Data
import { TotalOwedByWife } from '../../utils/Totals';
// Styles
import './totalOwed.css';

function TotalOwed() {
  return (
    <section className='totalOwed__container'>
      <article>
        <h3>Total Owed</h3>
        <h2>£ {TotalOwedByWife}</h2>
      </article>
    </section>
  );
}

export default TotalOwed;
