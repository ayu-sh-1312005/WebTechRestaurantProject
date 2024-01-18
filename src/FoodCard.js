import React from 'react'

function FoodCard() {
  return (
    <div className='rounded-2xl hover:scale-105 transition-all duration-200 w-[24%] border-2 border-orange-600 shadow-2xl bg-white p-2 flex flex-col items-center justify-center'>
        <div className='p-2'>
            <img src="https://www.healthygreenkitchen.com/wp-content/uploads/2022/02/healthy-quinoa-chicken-salad-bowl.jpg" alt="" />
        </div>
        <p>Healthy Salad With Chicken</p>
        <div className='w-full flex justify-end px-2'>
            <p className='text-orange-600 text-lg font-bold'>$10</p>
        </div>
    </div>
  )
}

export default FoodCard