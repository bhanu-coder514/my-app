import React from 'react'

const Search = () => {
  return (
    <div className='min-h-screen bg-purple-900 flex flex-col items-center'>
      <h1 className='text-white text-3xl mt-2'>Search Anything</h1>

      <input
        type='text'
        placeholder='search  here'
        className='px-3 py-1.5 bg-purple-950 border border-purple-950 mt-10 w-xl rounded-sm text-white'
      />

      <div className='w-[38%]'>
        <ul className='text-white text-xl font-bold bg-purple-800 mt-10 p-3 space-y-1 rounded-lg'>
            <li className='bg-purple-700 hover:bg-purple-950 cursor-pointer p-3 rounded flex justify-between items-center'>new videos</li>
            <li className='bg-purple-700 hover:bg-purple-950 cursor-pointer p-3 rounded flex justify-between items-center'>new videos</li>
            <li className='bg-purple-700 hover:bg-purple-950 cursor-pointer p-3 rounded flex justify-between items-center'>new videos</li>
        </ul>
      </div>
    </div>
  )
}

export default Search
