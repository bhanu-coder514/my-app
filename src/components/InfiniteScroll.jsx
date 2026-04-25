import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

const InfiniteScroll = () => {

  const [Products, SetProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [HasMore,setHasMore] = useState(true);
  const lastElementRef = useRef(null);
  const loadingRef = useRef(false);

  // console.log(Products[1]);

  useEffect(() => {

    console.log("observer useEffect call");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loadingRef.current && HasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    
    return () => observer.disconnect();

  }, [])

  useEffect(() => {

    if(!HasMore) return;

    console.log("api useEffect call");

    getData();
  }, [page])

  useEffect(() => {
    loadingRef.current = loading;
  },[loading])

  const getData = async () => {

    if(loading) return;

    setLoading(true);

    const data = await fetch(`https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`);
    const json = await data.json();

    if(json.products.length === 0){
      setHasMore(false);
    }

    SetProducts((prev) => [...prev, ...json.products]);

    setLoading(false);

    // console.log(json);
    // console.log(json.products[0]);
    // console.log(json.products[0].title);
  }


  return (
    <>
      <div className='flex flex-wrap'>
        {Products.map((Product) => {
          return (
            <Card
              key={Product.id}
              title={Product?.title}
              description={Product.description}
              brand={Product.brand}
              price={Product.price}
              image={Product.images[0]}
            />
          )
        }
        )}
      </div>

      <div
        ref={lastElementRef}
        className='h-5 text-center font-bold'
      >load data</div>
      {loading && <h1 className='font-bold text-center'>loading.....</h1>}
    </>
  )
}

export default InfiniteScroll
