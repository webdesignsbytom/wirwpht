import React from 'react';
import { useNavigate } from 'react-router-dom';
// Styles
import './cta.css';

function CTA({ prevItem, nextItem }) {
  const navigate = useNavigate();

  const uploadFile = () => {
    navigate('/upload', {
      replace: true,
    });
  }
  return (
    <>
      <section className='cta__container'>
        <div className='button__container'>
          <button className='btn' onClick={prevItem}>
            Prev
          </button>
        </div>
        <div className='button__container'>
          <button className='btn' onClick={uploadFile}>
            Upload
          </button>
        </div>
        <div className='button__container'>
          <button className='btn' onClick={prevItem}>
            Tweet
          </button>
        </div>
        <div className='button__container'>
          <button className='btn' onClick={nextItem}>
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default CTA;
