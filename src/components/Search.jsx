import React, { useEffect, useState } from 'react'
import { SEARCH_API } from '../../utils/constants';

const Search = () => {

  const [query,setQuery] = useState("");
  const [searchedData,setSearchedData] = useState([]);
  const [showSearchList,setShowSearchList] = useState(false);

  console.log(showSearchList);


  const getSearchData = async () => {
    const data = await fetch(SEARCH_API + query);
    const json = await data.json();

    if(json){
      setSearchedData(json[1])
      setLoading(false);
    }
    console.log("api call")
  }

  useEffect(() => {

    const timer = setTimeout(() => {
      getSearchData();
    }, 200);

    return () => {
      clearTimeout(timer);
    }
    
  },[query])

  return (
    <div className='min-h-screen bg-purple-900 flex flex-col items-center'>
      <h1 className='text-white text-3xl mt-2'>Search Anything</h1>

      <input
        type='text'
        placeholder='search  here'
        className='px-3 py-1.5 bg-purple-950 border border-purple-950 mt-10 w-xl rounded-sm text-white'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSearchList(true)}
        onBlur={() => setShowSearchList(false)}
      />

      {showSearchList && <div className='w-[38%]'>
        <ul className='text-white text-xl font-bold bg-purple-800 mt-10 p-3 space-y-1 rounded-lg'>
           
            {
              searchedData.map((item,index) => {
                return (
                 <li 
                  key={item} 
                  className='bg-purple-700 hover:bg-purple-950 cursor-pointer p-3 rounded flex justify-between items-center'
                  onMouseDown={(e) => e.preventDefault()}
                  >{item}</li>
                )
              })
            }
        </ul>
      </div>}
    </div>
  )
}

export default Search
