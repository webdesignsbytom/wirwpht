import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Components
import Item from '../../components/item/Item';
import Navbar from '../../components/nav/Navbar';
// Styles
import './itemPage.css';

function ItemPage() {
  const [itemDisplayed, setItemDisplayed] = useState({});
  // location stores state info
  const location = useLocation();
  // nav goes to what page you want
  const navigate = useNavigate();

  const { item } = location.state;
  console.log('item xxx', item);

  useEffect(() => {
    setItemDisplayed(item.data);
  }, []);

  return (
    <>
      <section className='itempage__container'>
        <Navbar />
        <div className='newItem__container'>
          <h2>New Item Successfully Added</h2>
          <Item item={itemDisplayed} />
        </div>
      </section>
    </>
  );
}

export default ItemPage;
