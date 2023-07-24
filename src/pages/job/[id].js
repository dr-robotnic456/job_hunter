import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

function SingleItem() {
  const [jobData, setJobData] = useState("")
  const router = useRouter()

  const { id } = router.query



  useEffect(() => {
    if (id) {
      job()
    }
  }, [id])

  const job = async () => {
    try {
      const response = await axios.get(`https://job-hunter-lzvu.vercel.app/api/job/${id}`)
      setJobData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const { title, description, employmentType, salary, requirements, location, company, user } = jobData
  return (
    <div>
      <Header />
      <div className='justify-center p-5 bg-blue-600 items-center'>
        <div className='items-center justify-center'>
          <h1 className='font-extrabold text-[100px] uppercase text-center underline'>
            {title}
          </h1>
        </div>
        <div className='items-center justify-center'>
          {/* <h2 className='font-bold text-9xl'>{user}</h2> */}
          <p className='uppercase text-7xl'>{company}</p>
          <p className='uppercase text-7xl'>{location}</p>
          <p className='uppercase text-2xl'>{description}</p>
          <p className='uppercase text-2xl font-semibold'>{requirements}</p>
          <p className='uppercase text-xl font-medium'>{employmentType}</p>
          {/* <p className='uppercase'>{salary}</p> */}
        </div>
        <div className=''>
          <button className='bg-green-500 items-center justify-center p-5 rounded-full uppercase font-bold'>Apply</button>
        </div>
      </div>

    </div>
  )
}

export default SingleItem
