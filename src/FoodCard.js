import React from 'react'

function FoodCard(props) {
  return (
    <div className='rounded-2xl hover:scale-105 transition-all duration-200 w-[24%] border-2 border-orange-600 shadow-2xl bg-white p-2 flex flex-col items-center justify-center'>
        <div className='p-2'>
            <img className='w-80 h-52' src={props.url} alt="" />
        </div>
        <p>{props.name}</p>
        <div className='w-full flex justify-end px-2'>
            <p className='text-orange-600 text-lg font-bold'>${props.cost}</p>
        </div>
    </div>
  )
}

export default FoodCard