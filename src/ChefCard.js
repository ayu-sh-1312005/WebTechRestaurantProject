import React from 'react'

function ChefCard() {
  return (
    <div className='bg-white w-60 gap-2 my-5 p-5 rounded-md border-orange-200 border-[5px] flex justify-center items-center flex-col'>
        <div className=''>
        <img src="https://t4.ftcdn.net/jpg/00/73/82/95/360_F_73829597_KUsflCydqrFome4VSIDbU70rauHtRbPb.jpg" alt="" />
        </div>
        <p className='text-orange-400 text-lg font-bold'>Chef Name</p>
        <p className='text-center text-sm'>No one is born a great cook one learns by doing</p>
    </div>
  )
}

export default ChefCard