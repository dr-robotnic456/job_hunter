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
      <div className='justify-center p-5 bg-gray-600 items-center'>
        <div className='items-center justify-center'>
          <h1 className='font-extrabold text-[100px] uppercase text-center underline'>
            {title}
          </h1>
        </div>
        <div className='items-center justify-center'>
          <h2 className='uppercase text-4xl'>{company}</h2>
          <p className='uppercase text-2xl mb-1'>{location}</p>
          <h3 className='text-center'>Description</h3>
          <p className='uppercase text-2xl'>{description}</p>
          <h3 className='text-center'>Requirements</h3>
          <ul>
            {requirementsArray.map((requirement, index) => (
              <li key={index} className='uppercase text-2xl font-semibold'>
                {requirement}
              </li>
            ))}
          </ul>
          <p className='uppercase text-xl font-medium'>{employmentType}</p>
        </div>
        <div className=''>
          <button className='bg-green-500 items-center justify-center p-5 rounded-full uppercase font-bold'>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
