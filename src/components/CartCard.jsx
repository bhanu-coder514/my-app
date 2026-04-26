import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../utils/cartSlice';

const CartCard = ({id,image,title,price}) => {

    const dispatch = useDispatch();

    const removeitems = () => {
        dispatch(removeItem(id));
    }

  return (
    <>
    <div className='flex items-center  justify-between mt-6 bg-amber-50 mx-auto w-[45%] py-15 rounded-sm h-10'>

    {/* left section */}
    <div className='flex items-center gap-6'>
      <img 
        src={image}
        alt='cartImage'
        className='w-28'
      />

    <h1 className='font-bold'>{title}</h1>
    </div>
      
    <div className='flex items-center gap-6'>
      <h2>Price: {price}</h2>
    
     <button className='bg-orange-400 px-6 py-2 mr-3 rounded-sm cursor-pointer'>buy</button>
     <button 
        className='bg-orange-400 px-6 py-2 mr-3 rounded-sm cursor-pointer'
        onClick={() => removeitems()}
        >Remove</button>

     </div>
    </div>
    </>
  )
}

export default CartCard
