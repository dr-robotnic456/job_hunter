import React, { useState } from 'react';

function Price({ handleChange }) {
    const [salary, setSalary] = useState(0);

    const handleSalaryChange = (e) => {
        const newSalary = Number(e.target.value);
        setSalary(newSalary);
        handleChange(newSalary);
    };

    return (
        <div className="my-4 w-full ">
            <h3 className="text-lg font-bold mb-2">Salary</h3>
            <div className="flex flex-col items-start justify-center">
                <div className='mr-2'>
                    <input type="radio" name="salary" id="salary" value="" title='all' defaultChecked/>All
                </div>
                <div className='mr-2'>
                    <input type="radio" name="salary" id="salary" value={50} title='50-100' />50-100
                </div>
                <div className='mr-2'>
                    <input type="radio" name="salary" id="salary" value={100} title='101-500' />100-500
                </div>
                <div className='mr-2'>
                    <input type="radio" name="salary" id="salary" value={500} title='501-1000' />500-1000
                </div>
                <div className='mr-2'>
                    <input type="radio" name="salary" id="salary" value={1000} title='1001-5000' />1000-5000
                </div>
            </div>
        </div>
    );
}

export default Price;
