import React from 'react'

function ChefCard(props) {
  return (
    <div className='bg-white w-60 gap-2 my-5 p-5 rounded-md border-orange-200 border-[5px] flex justify-center items-center flex-col'>
        <div className=''>
        <img src={props.url} alt="" />
        </div>
        <p className='text-orange-400 text-lg font-bold'>{props.name}</p>
        <p className='text-center text-sm'>{props.quote}</p>
    </div>
  )
}

export default ChefCard