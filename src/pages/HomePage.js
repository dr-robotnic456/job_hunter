import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/sidebar/Sidebar'
import Jobs from './components/Jobs'
import axios from 'axios';
import Card from './components/Card';

function HomePage() {
  const [jobsData, setJobsData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedEmployment, setSelectedEmployment] = useState(null)
  const [query, setQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  const [error, setError] = useState("")
  const [isActive, setIsActive] = useState('all')
  const [category, setCategory] = useState([])


  // input filter
  const handleInputChange = e => {
    setQuery(e.target.value)
  }

  const handleLocationChange = e => {
    setLocationQuery(e.target.value)
  }


  const filteredItems = jobsData.filter(jobData => jobData.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  const filteredLocation = jobsData.filter(jobData => jobData.location.toLowerCase().indexOf(locationQuery.toLowerCase()) !== -1)

  // radio filter
  const handleChange = e => {
    setSelectedEmployment(e.target.value)
  }

  // button filter
  const handleClick = catId => {
    setSelectedCategory(catId)
    setIsActive(catId);
  }

  function filteredData(jobsData, selectedCat, selectedEmp, query, locationQuery) {
    let filteredJobs = jobsData

    // filtering input items
    if (query) {
      filteredJobs = filteredItems
    }

    if (locationQuery) {
      filteredJobs = filteredLocation
    }

    if(selectedCat){
      filteredJobs = jobsData.filter(({category}) => category._id === selectedCat)
  }

    if(selectedEmp){
      if(selectedEmp === "all"){
        filteredJobs = jobsData
      }else{
        filteredJobs = jobsData.filter(({employmentType}) =>  employmentType === selectedEmp)
      }
    }

    return filteredJobs.map(({ _id, title, description, employmentType, salary, location, company, user, category }) => (
      <Card key={_id}
        id={_id}
        title={title}
        description={description}
        employmentType={employmentType}
        salary={salary}
        location={location}
        company={company}
        user={user}
        category={category}
      />
    ))
  }

  const result = filteredData(jobsData, selectedCategory, selectedEmployment, query, locationQuery);

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("api/job");
      const jobData = response.data;
      setJobsData(jobData);
    } catch (err) {
      console.log("Error fetching job data", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("api/categories");
      const categoriesData = response.data;
      setCategory(categoriesData);
    } catch (err) {
      console.log("Error fetching categories data", err);
    }
  };
  return (
    <div className='flex flex-col bg-white w-full'>
      <div>
        <Header query={query} handleInputChange={handleInputChange}/>
      </div>
      <div className='flex w-full'>
        <Sidebar handleChange={handleChange} locationQuery={locationQuery} handleLocationChange={handleLocationChange} />
        <Jobs result={result} category={category} isActive={isActive} setIsActive={setIsActive} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default (HomePage)