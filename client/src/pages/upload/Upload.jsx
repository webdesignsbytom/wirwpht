import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Styles
import './upload.css';

function Upload() {
  return (
    <>
      <section className='upload__container'>
        <Navbar />
        <section>
            <div>
                <h2>Upload your own</h2>
            </div>
        </section>
      </section>
    </>
  );
}

export default Upload;
