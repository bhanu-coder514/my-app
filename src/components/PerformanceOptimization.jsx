import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { findPrime } from '../../utils/prime';
import Chlid from './Chlid';

const PerformanceOptimization = () => {

    const [text,setText] = useState(0);
    const [DarkTheme,setDarkTheme] = useState(false);
    const [count,setCount] = useState(0);

    const data = useMemo(() => { name: "bhanu sharma" },[]);

    console.log(count);

    // prevent heavy calling function in every re-rendring 
    const PrimeNumber = useMemo(() => findPrime(text),[text]);

     const handleclick = useCallback(() => {   
       console.log("handle clicked.....!!");
    },[]);

    // const handleclick = () => {
    //   console.log("handeclicked created");  
    //   console.log("clicked");
    // }
    

  return (
    <>
    <div  className={(DarkTheme ? "min-h-screen bg-black text-white flex flex-col items-center" : "min-h-screen bg-white flex flex-col items-center")}>
      <h1 className='text-black text-3xl mt-2'>Heavy Calculations</h1>

      <input 
        className='border border-black mt-7 p-2'
        type='number' placeholder='Enter Number'
        value={text}
        onChange={(e) => setText(e.target.value)}
    />

    <p>{"Result: " + PrimeNumber}</p>

    <button 
        className='mt-2 p-2 bg-amber-700 text-white rounded-lg cursor-pointer'
        onClick={() => setDarkTheme(!DarkTheme)}
        >Dark Theme</button>

    <button 
      className='mt-2 p-2 bg-amber-700 text-white rounded-lg cursor-pointer'
      onClick={() => setCount(count + 1)}
    >count++</button>
    </div>

    <Chlid onClick={handleclick} data = {data}/>
    </>
  )
}

export default PerformanceOptimization;
