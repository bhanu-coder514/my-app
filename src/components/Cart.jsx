import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartCard from './cartCard';

const cart = () => {

  const cartitems = useSelector(state => state.cart.items);

  return (
    <div>
      <div>
      {
        cartitems.length > 0 ? 
        cartitems.map((item) => (
          <CartCard key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} quantity={item.quantity}/>
        )) : <h1 className='text-center text-2xl font-bold'>Cart is empty</h1>
      }
      </div>
    </div>
  )
}

export default cart
