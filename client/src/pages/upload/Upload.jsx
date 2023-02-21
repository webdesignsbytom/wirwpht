import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Styles
import './upload.css';

function Upload() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <>
      <section className='upload__container'>
        <Navbar />
        <section>
          <div>
            <h2>Upload your own</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name'>name</label>
                <input type='text' onChange={handleChange} id="name"/>
              </div>
              <div>
                <label htmlFor='imageUrl'>Image Url</label>
                <input type="url" name="imageUrl" id="imageUrl" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='cost'>cost</label>
                <input type='number' onChange={handleChange} id='cost' name='cost'/>
              </div>
              <div>
                <label htmlFor='effect'>Effect</label>
                <input type='text' onChange={handleChange} id='effect' name='effect' />
              </div>
              <div>
                <label htmlFor='desc'>Description</label>
                <input type='text' onChange={handleChange} id='desc' name='desc' />
              </div>
              <div>
                <input type="submit" value="Submit!" />
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default Upload;
