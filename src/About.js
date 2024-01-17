import React from 'react'
import ChefCard from './ChefCard'

function About() {
  return (
    <div className='w-[1080px] mx-auto flex flex-col'>
        <div className='flex h-[100vh] gap-6'>
            <div className='flex-[0.5] flex flex-col justify-center items-center gap-4'>
                <div className='w-full'>
                    <p className='text-5xl text-orange-600 font-extrabold'>About Us</p>
                </div>
                <p className='text-'>Welcome to our culinary haven, where passion for wholesome living meets the art of delicious dining. At [Your Restaurant Name], our "About Us" story is a celebration of a commitment to health and happiness. From our thoughtfully curated menu, brimming with nourishing ingredients, to the warm ambiance that embraces well-being, we invite you to embark on a journey with us—a journey where every bite is a step towards vitality, and every moment shared is a testament to our dedication to your holistic enjoyment. Join us in savoring a flavorful tapestry that intertwines taste and wellness, weaving a story of culinary delight in the heart of our healthy-themed haven.</p>
            </div>
            <div className='flex-[0.5] flex justify-center items-center'>
                <img src="https://media.blogto.com/articles/20180620-2048-DonAlfonso23.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70" alt="" />
            </div>
        </div>

        <div className='flex flex-col gap-5 mx-auto w-full'>
            <div className='mx-auto'>
                <p className='font-extrabold text-orange-600 text-6xl'>Our Golden Chefs</p>
            </div>
            <div className='flex justify-between items-center gap-5 mx-auto'>
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
            </div>
        </div>

        <div className='mx-auto w-full flex flex-col gap-6 my-10'>
            <div className='font-extrabold text-orange-600 text-6xl text-center'> 
                <p className=''>Our Story</p>
            </div>
            <div>
                <p className='text-justify'>Embark on a culinary voyage with [Your Restaurant Name], where our story is a tapestry woven with a passion for health and flavor. Inspired by a desire to redefine dining, we started as a dream—a dream of crafting a sanctuary where every meal is a celebration of well-being. From sourcing the freshest, nutrient-rich ingredients to the artful preparation that captures the essence of wholesome indulgence, our journey is one of dedication to your vitality. Picture a place where nourishment meets innovation, and every dish tells a tale of mindful living. In the heart of [Your City], we invite you to join us on this odyssey—a haven where taste meets health, and every moment is a flavorful testament to our commitment to your vibrant, culinary experience. Welcome to [Your Restaurant Name], where good food meets great stories.</p>
            </div>
        </div>
    </div>
  )
}

export default About