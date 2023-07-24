import axios from 'axios';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBox({query, handleInputChange }) {

  return (
    <div className="flex justify-center mt-2 pb-7 relative">
        <div className="flex w-full sm:w-3/4 md:w-2/3 lg:w-4/5 xl:w-2/5 bg-white mt-20 rounded-full items-center justify-between p-2 dark:bg-[#082032]">
          <div className="flex items-center w-full">
            <div className="relative flex-grow">
              <input
                type="text"
                name="searchTitle"
                value={query}
                onChange={handleInputChange}
                className="text-black ml-3 h-10 rounded-full pl-10 pr-4 focus:outline-none w-full dark:bg-gray-900"
                placeholder="Search by title ....."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                <BsSearch className="text-gray-400" />
              </div>
            </div>
            <div className="border-l border-gray-300 mx-2 h-6 hidden sm:block" />
        </div>
    </div>
    </div>
  );
}

export default SearchBox;