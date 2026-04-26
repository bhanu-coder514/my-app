import React, { useEffect, useState } from 'react'
import Header from './Header'

const ProductsPage = () => {

    const [Products,setProducts] = useState([]);

    useEffect(() => {
        
    },[])

    const getProducts = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=10&skip=0");
        const json = await data.json();

        
    }

  return (
    <>
    <Header/>

    <div>
      
    </div>
    </>
  )
}

export default ProductsPage
