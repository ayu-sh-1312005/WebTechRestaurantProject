import React from 'react';
import toast from 'react-hot-toast';


function BookTable() {

    function booktable(){
        toast.success('Table Booked');
    }
  return (
    <div className='w-[1080px] mx-auto'>
        <div className='h-[100vh] flex'>
            <div className='flex-[0.6] flex justify-center items-center'>
                <img src="https://www.forbesindia.com/media/images/2023/Jun/img_210733_ultraviolet_singapore_bg.jpg" alt="" />
            </div>
            <div className='flex-[0.4] flex justify-center items-center'>
                <div className='bg-white w-[90%] text-lg p-5 flex flex-col gap-4 rounded-md shadow-2xl shadow-black'>
                    <p className='mx-auto text-center text-orange-600 font-extrabold text-4xl'>Book Your Table</p>
                    <div>
                        <label  htmlFor="">Name</label>
                        <input placeholder='Full Name' className='border-2 p-2 w-full border-black' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input placeholder='E-mail' className='border-2 p-2 w-full border-black' type="email" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Date</label>
                        <input placeholder='' className='border-2 p-2 w-full border-black' type="date" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Time</label>
                        <input className='border-2 p-2 w-full border-black' type="time" name="" id="" />
                    </div>
                    <div>
                        <button onClick={booktable} className='bg-orange-600 w-full text-3xl text-white font-bold p-2 rounded-md'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookTable