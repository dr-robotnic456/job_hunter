import React, { useState } from 'react';
import Location from './Location';
import Price from './Price';
import Employment from './Employment';

function Sidebar({ handleChange, handleLocationChange, locationQuery }) {

  return (
    <div className='bg-[#f1f1f1] w-1/4 dark:bg-gray-800 '>
      <ul>
        <div className='justify-center items-left ml-3 flex flex-col text-black dark:text-white'>
          <li className='mb-4 mt-3 font-bold text-xl'>Filter</li>
          <li className='mb-4 mt-6 text-sm text-black'>
            <Location handleLocationChange = {handleLocationChange} locationQuery = {locationQuery}/>
          </li>

          <li className='mb-4 mt-6 font-semibold text-lg'>
            <Employment handleChange={handleChange}/>
          </li>

          <li>
          </li>

          <li className='mb-4 mt-6 font-semibold text-lg'>
            <Price handleChange={handleChange}/>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
