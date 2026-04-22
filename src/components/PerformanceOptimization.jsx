import React, { useEffect, useMemo, useState } from 'react'
import { findPrime } from '../../utils/prime';

const PerformanceOptimization = () => {

    const [text,setText] = useState(0);
    const [DarkTheme,setDarkTheme] = useState(false);

    // prevent heavy calling function in every re-rendring 
    const PrimeNumber = useMemo(() => findPrime(text),[text]);
    

  return (
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
    </div>
  )
}

export default PerformanceOptimization;
