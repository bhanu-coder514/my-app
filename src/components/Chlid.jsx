import React from 'react'

const Chlid = React.memo(({onClick,data}) => {

    console.log("child render");
    console.log(data);

  return (
    <div> 
      <button 
        className='text-black bg-amber-700 p-2 rounded-2xl'
        onClick={onClick}
        >click here</button>
    </div>
  )
});

export default Chlid
