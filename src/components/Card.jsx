import React from 'react'
import { useDispatch } from 'react-redux'
import { additem } from '../../utils/cartSlice';

const Card = ({id,title,description,brand,price,image}) => {

  const dispatch = useDispatch();

  const additems = () => {
    dispatch(additem({
      id:id,
      title:title,
      price:price,
      image:image,
    }))
  }

  return (
    <div className='p-2 m-4 mt-36 w-64 border border-white rounded-2xl shadow-2xl cursor-pointer'>
      <img 
        src={image} 
        alt="images"
        className='w-60 h-60'
      />

      <h1 className='font-bold'>{title}</h1>
      <h2 className='font-bold'>Brand: {brand}</h2>
      <h2 className='font-bold'>$: {price}</h2>

      <button 
        className='ml-14 mt-1.5 bg-orange-500 py-1 px-5 rounded-2xl cursor-pointer'
        onClick={() => additems()}
        >Add To Cart</button>
    </div>
  )
}

export default Card
