import React from 'react';
import CategoryCard from '../components/CategoryCard';

const Jobs = ({ result, handleClick, category, isActive, setIsActive }) => {
  if (result && result.length === 0) {
    return (
      <div>
        <div id='job' className='bg-white flex-col flex h-screen  flex-wrap w-full ml-[25%] flex-start gap-1 dark:bg-black'>
          <CategoryCard handleClick = {handleClick} category = {category} isActive={isActive} setIsActive={setIsActive}/>
        </div>
        <div className='text-red-700 items-center flex flex-col justify-center text-center text-9xl uppercase dark:bg-black '>
          No Data Found!
        </div>
      </div>
    );
  } else {
    return (
      <div id='job' className='bg-white flex-col h-screen flex flex-wrap  w-full ml-[25%] flex-start gap-1 dark:bg-black'>
        <CategoryCard handleClick = {handleClick} category = {category} isActive={isActive} setIsActive={setIsActive}/>
        <div className="flex">
          {result}
        </div>
      </div>
    );
  }

};

export default Jobs;
