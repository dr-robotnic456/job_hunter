import React, { useEffect, useState } from 'react';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const themeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsFillSunFill className='w-7 h-7  hover:text-4xl text-yellow-600' role='button' onClick={() => setTheme('light')} />
      );
    } else {
      return (
        <BsMoonFill className='w-7 h-7  hover:text-4xl text-white' role='button' onClick={() => setTheme('dark')} />
      );
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
  }

  return (
    <nav className='flex justify-center items-center h-12 relative bg-blue-950'>
      <ul className='justify-center items-center m-1 w-[90%] text-black uppercase font-bold cursor-pointer'>
        <div className='flex justify-between items-center m-3'>
          <div className='flex items-center m-3'>
            <li className='mr-3 px-2 rounded-2xl hover:text-red-400 text-white dark:hover:text-[#2C394B] dark:text-[#F5F5F5]'>Home</li>
            <li className='mr-3 px-2 rounded-2xl hover:text-red-400 text-white dark:hover:text-[#2C394B] dark:text-[#F5F5F5]'>Jobs</li>
            <li className='mr-3 px-2 rounded-2xl hover:text-red-400 text-white dark:hover:text-[#2C394B] dark:text-[#F5F5F5]'>Company Profiles</li>
            <li className='mr-3 px-2 rounded-2xl hover:text-red-400 text-white dark:hover:text-[#2C394B] dark:text-[#F5F5F5]'>Career Resources</li>
            <li className='mr-3 px-2 rounded-2xl hover:text-red-400 text-white dark:hover:text-[#2C394B] dark:text-[#F5F5F5]'>My Account</li>
            <li className='mr-3 px-2 rounded-2xl hover:text-red-400 text-white dark:hover:text-[#2C394B] dark:text-[#F5F5F5]'>Contact</li>
          </div>
          <div className='flex items-center'>
            <li className='flex justify-between'>
              <MdOutlineNotificationsActive className='text-3xl ml-auto mr-4  hover:text-4xl' />
              {themeChanger()}
            </li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
