// Jobs.js

import React from 'react';
import CategoryCard from '../components/CategoryCard';

const Jobs = ({ result, handleClick, category, isActive, setIsActive }) => {
  return (
    <div id='job' className='bg-white flex-col h-screen w-full overflow-hidden max-w-screen-lg flex-start gap-1 dark:bg-black'>
      <CategoryCard handleClick={handleClick} category={category} isActive={isActive} setIsActive={setIsActive} />
      <div className="flex flex-wrap">
        {result && result.length === 0 ? (
          <div className='text-red-700 items-center flex flex-col justify-normal mt-0 text-center text-9xl uppercase dark:bg-black'>
            No Data Found!
          </div>
        ) : (
          result
        )}
      </div>
    </div>
  );
};

export default Jobs;
