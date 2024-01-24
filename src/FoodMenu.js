import React from 'react'
import FoodCard from './FoodCard';
import FoodMenuData from './FoodMenuData';

function FoodMenu() {
  return (
    <div className='w-[1080px] mx-auto flex flex-col gap-8 items-center min-h-[100vh] py-8'>
        <div>
            <p className='text-orange-600 font-extrabold text-7xl'>Food Menu</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {FoodMenuData.map((data)=> <FoodCard id={data.id} url={data.url} cost={data.cost} name={data.name} />)}
        </div>
    </div>
  )
}

export default FoodMenu