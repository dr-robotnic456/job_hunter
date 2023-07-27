import React, { useState } from 'react';
import SearchBox from './SearchBox';
import NavBar from './NavBar';
import nav from '../../../public/navbg.jpg'
import Image from 'next/image';

function Header({ query, handleInputChange }) {

  return (
    <div className='bg-[#f1f1f1] h-[80vh] md:h-[60vh]  mr-2 justify-center  items-center w-screen dark:bg-gray-800 relative'>
      <div className='w-full h-full rounded-b-[200px] relative overflow-hidden'>
        <Image src={nav} alt='Background' layout='fill' objectFit='cover' className='opacity-40' />

        <NavBar/>
      <hr />
      <div className='justify-center ml-20 text-3xl md:text-6xl lg:text-6xl font-bold text-black dark:text-white mb-10 w-[90%] items-center px-4'>
        FIND YOUR DREAM JOB HERE
      </div>
      <SearchBox query={query} handleInputChange={handleInputChange} />
      </div>
      
    </div>

  );
}

export default Header;
