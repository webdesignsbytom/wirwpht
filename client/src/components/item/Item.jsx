import React from 'react';
// Styles
import './item.css'

function Item({ item }) {
  console.log('ITEM:', item);
  return (
    <>
      <section className='item__container'>
        <div className='item__titles'>
          <h3> {item.name}</h3>
          <h3>£ {item.cost} each</h3>
        </div>
        <div className='item__image'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item__total">
          <h5>Total {item.name} Per Person in the UK</h5>
          <h3>10000000</h3>
        </div>
      </section>
    </>
  );
}

export default Item;
