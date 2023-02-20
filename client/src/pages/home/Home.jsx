import React, { useEffect, useState } from 'react';
import CTA from '../../components/cta/CTA';
import Item from '../../components/item/Item';
// Components
import Navbar from '../../components/nav/Navbar'
import TotalOwed from '../../components/totalOwed/TotalOwed'
// Styles
import './home.css';

function Home() {
  const [itemsDisplay, setItemsDisplay] = useState([])
  console.log('itemsDisplay', itemsDisplay);

  useEffect(() => {
    console.log('using an effect to get post query');
    fetch(`http://localhost:4000/items`)
      .then((res) => res.json())
      .then((data) => {
        setItemsDisplay(data.data);
        console.log('data: ', data.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <>
      <section className='homepage__container'>
        <Navbar />
        <div className="main__container">
            <TotalOwed />
            {itemsDisplay.length > 0 ? <Item /> : <div>Nothing to display...</div>}
            
            <CTA />
        </div>
      </section>
    </>
  );
}

export default Home;
