import React from 'react'

const Card = ({title,description,brand,price,image}) => {

  return (
    <div className='p-2 m-4 w-64 border border-white rounded-2xl shadow-2xl cursor-pointer'>
      <img 
        src={image} alt="images"
        className='w-60 h-60'
      />

      <h1 className='font-bold'>{title}</h1>
      <h2 className='font-bold'>Brand: {brand}</h2>
      <h2 className='font-bold'>$: {price}</h2>
    </div>
  )
}

export default Card
