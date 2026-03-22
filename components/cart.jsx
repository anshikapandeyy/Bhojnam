import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {clearCart} from '../utils/cartSlice.js';
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.jsx";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
    const handle=()=>{
        dispatch(clearCart())
    }
  return (
    <div style={{ padding: '20px', fontSize:'30px' }}>
        <div  onClick={handle}>
            <button className="clear" >Clear</button>
        </div>
      {items.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <div style={{display:'flex',fontSize:'30px'}}>
          {items.map((item, index) => (
            <RestaurantCard 
            key={index} resName={item.resName}
              resImage={item.resImage}
              cuisine={item.cuisine}
              rating={item.rating}

            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;