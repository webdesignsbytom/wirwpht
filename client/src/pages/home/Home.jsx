import React from 'react';
import CTA from '../../components/cta/CTA';
import Item from '../../components/item/Item';
// Components
import Navbar from '../../components/nav/Navbar'
import TotalOwed from '../../components/totalOwed/TotalOwed'
// Styles
import './home.css';

function Home() {
  return (
    <>
      <section className='homepage__container'>
        <Navbar />
        <div className="main__container">
            <TotalOwed />
            <Item />
            <CTA />
        </div>
      </section>
    </>
  );
}

export default Home;
