import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Components
import Item from '../../components/item/Item';

function ItemPage() {
  const [itemDisplayed, setItemDisplayed] = useState({});
  // location stores state info
  const location = useLocation();
  // nav goes to what page you want
  const navigate = useNavigate();
  const { item } = location.state;

  useEffect(() => {
    setItemDisplayed(item)
  }, [])

  return (
    <div>
      <Item item={itemDisplayed}/>
    </div>
  );
}

export default ItemPage;
