import React, { useEffect, useState } from 'react'

function CategoryCard({ handleClick, selectedCategory, category, isActive, setIsActive }) {

    return (
        <div className="flex text-black dark:text-white p-4 flex-start">
            <button
                value=""
                onClick={() => handleClick()}
                className={`mr-3 p-2 rounded-full px-4 cursor-pointer ${isActive === "all" ? "bg-[#000]  text-white" : "bg-[#f1f1f1] text-black"}`}
            >
                All
            </button>
            {category && category.map(({ name, _id }) => (
                <button
                    key={_id}
                    onClick={() => handleClick(_id)}
                    value={selectedCategory}
                    className={`mr-3 p-2 rounded-full px-4 cursor-pointer ${isActive === _id ? "bg-[#000] text-white" : "bg-[#f1f1f1]  text-black"}`}
                >
                    {name}
                </button>
            ))}

        </div>
    )
}

export default CategoryCard
