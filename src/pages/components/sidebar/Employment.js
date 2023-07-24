import React from 'react'

function Employment({ handleChange }) {
    return (
        <div className='flex flex-col items-start justify-center'>
            <div>
                <input type="radio" name='employment' value="all" title = "All" onChange={handleChange} className='mr-2' defaultChecked/>All
            </div>
            <div>
                <input type="radio" name='employment' value="fulltime" title = "Full Time" onChange={handleChange} className='mr-2' />Full Time
            </div>
            <div>
                <input type="radio" name='employment' value="parttime" title = "Part Time" onChange={handleChange} className='mr-2' />Part Time
            </div>
            <div>
                <input type="radio" name='employment' value="remote" title = "Remote" onChange={handleChange} className='mr-2' />Remote
            </div>

        </div>
    )
}

export default Employment
