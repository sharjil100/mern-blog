import React, { useState, useEffect } from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the saved mode from local storage or default to false
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the mode to local storage
      localStorage.setItem('darkMode', newMode);
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <Navbar className='border-b-2'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Sharjil's
          </span>
          Blog
        </Link>

        {/* Search bar and icon */}
        <div className='flex items-center space-x-2'>
          <form className='relative hidden lg:flex'>
            <TextInput
              type='text'
              placeholder='Search...'
              className='pr-10'
            />
            <AiOutlineSearch className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400' />
          </form>
          <Button 
            className='lg:hidden flex items-center justify-center w-10 h-10 p-2 rounded-full bg-gray-200 text-gray-600 shadow-md hover:bg-gray-300 focus:outline-none'
            onClick={() => {}}
          >
            <AiOutlineSearch size={20} />
          </Button>
        </div>

        {/* Buttons: Moon/Sun, Sign In */}
        <div className='flex items-center space-x-2'>
          {/* Toggle Dark Mode */}
          <Button 
            className='flex items-center justify-center w-10 h-10 p-2 rounded-full bg-gray-200 text-gray-600 shadow-md hover:bg-gray-300 focus:outline-none'
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </Button>

          {/* Sign In button */}
          <Link to='/Signin'>
            <Button gradientDuoTone='purpleToBlue'>
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
