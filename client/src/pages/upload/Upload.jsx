import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import { validUrl } from '../../utils/Validation';
// Styles
import './upload.css';

function Upload() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const checkUrl = validUrl(formData.imageUrl)
    console.log('checkUrl', checkUrl);

    const res = await fetch('http://localhost:4000/items/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',        
      },
      body: JSON.stringify(formData),
    });

    console.log('res', res);
    const newPostData = await res.json();
    console.log('newPostData', newPostData);

    navigate(`/item`, { state: { item: newPostData } });

  }

  return (
    <>
      <section className='upload__container'>
        <Navbar />
        <section className='form__container'>
          <div className='upload__titles'>
            <h2>Upload your own item</h2>
            <h5>Something you would do instead of hide money offshore and never spend?</h5>
          </div>
          <div className='second__form'>
            <form onSubmit={handleSubmit}>
              <div className='formInput__container'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={handleChange} id="name"/>
              </div>
              <div className='formInput__container'>
                <label htmlFor='imageUrl'>Image Url</label>
                <input type="url" name="imageUrl" id="imageUrl" placeholder='https://' onChange={handleChange} />
              </div>
              <div className='formInput__container'>
                <label htmlFor='cost'>Cost per item</label>
                <input type='number' onChange={handleChange} id='cost' name='cost'/>
              </div>
              <div className='formInput__container'>
                <label htmlFor='effect'>Effect of purchase</label>
                <input type='text' placeholder='Can we benifit?' onChange={handleChange} id='effect' name='effect' />
              </div>
              <div className='formInput__container'>
                <label htmlFor='desc'>Description of product</label>
                <textarea onChange={handleChange} id='desc' name='desc' />
              </div>
              <div className='formInput__container submitBtn'>
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
