import Link from 'next/link';

function Card({ id, title, description, employmentType,company }) {
    return (
        <div className='card bg-[#f1f1f1] h-[300px] w-1/4 sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-6 uppercase my-2 mx-2 rounded-xl dark:bg-gray-800 overflow-hidden'>
            <h2 className='card-title text-xl font-bold mb-2 text-white'>{title}</h2>
            {/* <p className='card-description text-gray-600 dark:text-white capitalize'>
                {description.slice(0,30)}
            </p> */}
            <p className='card-description text-gray-600 dark:text-white'>
                {company}
            </p>
            <p className='card-description text-gray-600 dark:text-white'>
                {employmentType}
            </p>
            <br />
            <Link href = {`/job/${id}`}>
                <button
                    className='card-button mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow'
                >
                    View
                </button>
            </Link>

        </div>
    );
}

export default Card;
