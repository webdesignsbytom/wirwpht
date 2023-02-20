import React, { useEffect, useState } from 'react';
// Data
import { TotalUkCitizens, TotalOwedByWife } from '../../utils/Totals';
// Styles
import './item.css';

function Item({ item }) {
  const [ukCitizensNum, setUkCitizensNum] = useState(TotalUkCitizens);
  const [totalPurchased, setTotalPurchased] = useState(0)
  const [totalEach, setTotalEach] = useState(0)

  useEffect(() => {
    console.log('effect');
    console.log('ukCitizens', ukCitizensNum);
    console.log('totalPurchased', totalPurchased);
    let itemCost = item.cost
    console.log('item cost', itemCost);
    let totalPurchase = TotalOwedByWife / itemCost
    setTotalPurchased(totalPurchase)
    console.log('total', totalPurchase);
    let totalEach = totalPurchase / ukCitizensNum
    setTotalEach(totalEach)
    console.log('total each', totalEach);
  }, [])

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
        <div className='item__total'>
          <>
            <h5>Total Purchased</h5>
            <h3>{totalPurchased}</h3>
          </>
          <div>
            <h5>Total {item.name} Per Person in the UK</h5>
            <h3>{totalEach}</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Item;
