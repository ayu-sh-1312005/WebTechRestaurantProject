import React from 'react'
import FoodCard from './FoodCard'

function FoodMenu() {
  return (
    <div className='w-[1080px] mx-auto flex flex-col gap-8 items-center min-h-[100vh] py-8'>
        <div>
            <p className='text-orange-600 font-extrabold text-7xl'>Food Menu</p>
        </div>
        <div className='flex flex-wrap gap-2'>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </div>
    </div>
  )
}

export default FoodMenu