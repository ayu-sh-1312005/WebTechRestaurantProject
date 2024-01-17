import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex mx-auto w-[1080px] p-2 border-solid border-b-[5px] border-b-orange-700'>
        <div className='flex mx-auto justify-evenly w-full font-extrabold'>
            <Link to={'/'}>
                <p>Home</p>
            </Link>
            <Link to={'/about'}>
                <p>About</p>
            </Link>
            <Link to={'/foodmenu'}>
                <p>Food Menu</p>
            </Link>
            <Link to={'booktable'}>
                <p>Book Table</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar