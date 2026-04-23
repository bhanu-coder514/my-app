import React, { useEffect, useState } from 'react'
import Card from './Card';

const InfiniteScroll = () => {

  const [Products,SetProducts] = useState([]);

  // console.log(Products[1]);

  useEffect(() => {
    getData();
  },[])

  const getData = async () =>{
    const data = await fetch("https://dummyjson.com/products?limit=20&skip=0");
    const json = await data.json();

    SetProducts(json.products);
    // console.log(json);
    console.log(json.products[0]);
    // console.log(json.products[0].title);
  }


  return (
    <>
    <div className='flex flex-wrap'>
      {Products.map((Product) => {
        return(
        <Card 
          title={Product?.title} 
          description={Product.description} 
          brand={Product.brand} 
          price={Product.price} 
          image={Product.images[0]}
        />
      )}
    )};
    </div>

    <div></div>
    </>
  )
}

export default InfiniteScroll
