import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function SingleItem() {
  const [jobData, setJobData] = useState("");
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      job();
    }
  }, [id]);

  const job = async () => {
    try {
      const response = await axios.get(`/api/job/${id}`);
      setJobData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { title, description, employmentType, location, company, requirements } = jobData;

  // Ensure requirements is an array
  const requirementsArray = Array.isArray(requirements) ? requirements : [requirements];

  return (
    <div>
      <Header />
      <div className='bg-white dark:bg-gray-900'>
      <div className='justify-center p-10 bg-gray-600 items-center w-[90%] shadow-md rounded-lg mx-auto my-3'>
        <div className='items-center justify-center'>
          <h1 className='font-extrabold text-[100px] uppercase text-center underline'>
            {title}
          </h1>
        </div>
        <div className='items-center justify-center p-10'>
          <h2 className='uppercase text-xl'>{company}</h2>
          <p className='uppercase text-lg mb-1'>{location}</p>
          <h3 className='text-center text-2xl'>Description</h3>
          <p className='uppercase text-sm'>{description}</p>
          <h3 className='text-center text-xl uppercase'>Requirements</h3>
          <ul className='list-disc text-white'>
            {requirementsArray.map((requirement, index) => (
              <li key={index} className=' text-sm font-semibold'>
                {requirement}
              </li>
            ))}
          </ul>
          <p className='uppercase text-xl font-medium'>{employmentType}</p>
        </div>
        <div className=''>
          <button className='bg-green-500 items-center justify-center p-5 rounded-full text-center uppercase font-bold'>Apply</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SingleItem;
