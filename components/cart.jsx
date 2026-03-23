import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItems } from '../utils/cartSlice.js';
import RestaurantCard from "./RestaurantCard.jsx";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handle = () => {
    dispatch(clearCart());
  };

  const handleRemove = (index) => {
    dispatch(removeItems(index));
  };

  return (
    <div style={{ padding: '20px' }}>
      
      <button className="clear" onClick={handle}>
        Clear
      </button>

      {items.length === 0 ? (
        <h2 style={{textAlign:'center'}}>Your Cart is Empty</h2>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
          {items.map((item, index) => (
            <div key={index} style={{ width: '250px' }}>
              <RestaurantCard 
                resName={item.resName}
  resImage={item.resImage}
  cuisine={item.cuisine}
  rating={item.rating}
  showRemove={true}
  onRemove={() => handleRemove(index)}
              />
              <button 
                className="remove" style={{ marginTop: '10px', width: '100%' }}
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Cart;