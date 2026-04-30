import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';
import Header from './Header';
import { SEARCH_API } from '../../utils/constants';

const InfiniteScroll = () => {

  const [Products, SetProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [HasMore, setHasMore] = useState(true);
  const lastElementRef = useRef(null);
  const loadingRef = useRef(false);
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  console.log(queryData);

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

    if (!HasMore) return;

    console.log("api useEffect call");

    getData();
  }, [page])

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading])

  useEffect(() => {

    if(query.trim() === ""){
      //clear data 
      setQueryData([]);
      return;
    }

    // Debouncing
    const timer = setTimeout(() => {
      getQueryData();
      console.log("search api call...");
    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [query])


  const getQueryData = async () => {
    const data = await fetch(`https://dummyjson.com/products/search?q=${query}`);

    const json = await data.json();

    const items = json.products.map(item => item.title);

    console.log(items);
    setQueryData(items);
    SetProducts(json.products);

  }

  const getData = async () => {

    if (loading || query) return;

    setLoading(true);

    const data = await fetch(`https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`);
    const json = await data.json();

    if (json.products.length === 0) {
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

      <Header />

      <input
        className='mt-[8%] ml-[30%] border border-black rounded-2xl py-1 px-7 w-xl'
        type='text'
        placeholder='search purduct here...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />

      {/* search suggestions */}
      {showSuggestions && <div className='absolute shadow-2xl ml-[30%] bg-amber-50 w-xl p-2 rounded-lg'>
        <ul>

          {queryData.map((item) => {
            return (
              <li 
                key={item}
                className='mt-2 hover:bg-amber-100 cursor-pointer'
                onMouseDown={(e) => e.preventDefault()}
                >{item}</li>
            )
          })}

        </ul>
      </div>}

      <div className='flex flex-wrap'>

        {Products.map((Product) => {
          return (
            <Card
              key={`${Product.id}-${page}`}
              id={Product.id}
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
