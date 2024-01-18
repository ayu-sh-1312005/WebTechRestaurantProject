import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='w-[1080px] mx-auto flex flex-col'>
        <div>
            <div className='flex h-[100vh]'>
                <div className='flex-[0.6] gap-7 flex flex-col justify-center items-center'>
                    <p className=' w-full font-extrabold text-6xl leading-[70px]'>Enjoy <span className='text-orange-600  underline underline-offset-8'>Delicious Food</span> in Your Healthy Life</p>
                    <p className='text-sm'>Indulge in a culinary journey at our restaurant, where wholesome flavors and nourishing ingredients come together to create a delightful and health-conscious dining experience. Elevate your palate with our vibrant menu, crafted to redefine the intersection of taste and well-being.</p>
                    <div className='w-full'>
                        <Link to={'/booktable'}>
                        <div className='bg-orange-600 shadow-2xl hover:scale-105 transition-all duration-200 w-fit flex items-center justify-between text-white font-extrabold text-3xl gap-3 text-center p-5 rounded-xl'>Visit Now <div><FaArrowRight /></div></div>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-[0.4]'>
                    <img src="https://img.taste.com.au/gpe52rFs/taste/2017/09/easy-beef-and-quinoa-salad-bowl-130828-2.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home