import React, { useEffect, useState } from 'react';
import CTA from '../../components/cta/CTA';
import Item from '../../components/item/Item';
// Components
import Navbar from '../../components/nav/Navbar';
import TotalOwed from '../../components/totalOwed/TotalOwed';
// Styles
import './home.css';

function Home() {
  const [itemsDisplay, setItemsDisplay] = useState([]);
  const [currentItem, setCurrentItem] = useState(itemsDisplay);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('using an effect to get post query');
    fetch(`http://localhost:4000/items`)
      .then((res) => res.json())
      .then((data) => {
        setItemsDisplay(data.data);
        setCurrentItem(data.data[currentIndex]);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  useEffect(() => {
    setCurrentItem(itemsDisplay[currentIndex]);
  }, [currentIndex]);

  const nextItem = () => {
    if (currentIndex === itemsDisplay.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex === 0) {
      setCurrentIndex(itemsDisplay.length);
    }
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <>
      <section className='homepage__container'>
        <Navbar />
        <div className='main__container'>
          <TotalOwed />
          {itemsDisplay.length > 0 ? (
            <Item item={currentItem} />
          ) : (
            <div>Nothing to display...</div>
          )}
          <CTA nextItem={nextItem} prevItem={prevItem} />
        </div>
      </section>
    </>
  );
}

export default Home;
