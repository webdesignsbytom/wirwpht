import React from 'react';
// Styles
import './cta.css'

function CTA({ prevItem, nextItem }) {
  return (
    <>
      <section className='cta__container'>
        <div className='button__container'>
          <button className='btn'>Upload</button>
        </div>
        <div className='button__container'>
          <button className='btn'>Tweet</button>
        </div>
        <div className='button__container doubleBtn__container'>
          <button className='btn' onClick={prevItem}>Prev</button>
          <button className='btn' onClick={nextItem}>Next</button>
        </div>
      </section>
    </>
  );
}

export default CTA;
