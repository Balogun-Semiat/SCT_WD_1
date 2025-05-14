import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
           const handleScroll = () =>{
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    

    const toggleBtn = ()=> {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };
    
  return (
    <nav className={`nav flex justify-between items-center font-semibold py-4 px-7 m-auto w-[80vw] rounded-full fixed  left-1/2 transform -translate-x-1/2 z-50 shadow-lg ${scrolled ? "bg-gray-200 shadow-md top-0" : "text-white shadow-lg bg-transparent border-b border-amber-600 top-4"} transition duration-300 ease-in-out`}>
        <div>
            <h1 className=''>Logo</h1>
        </div>

        {/* Desktop Menu */}
        <ul className='list space-x-10 hidden sm:flex'>
            <a href="#home"><li className=' hover:border-b border-b-white cursor-pointer'>Home</li></a>
            <a href="#about"><li className='hover:border-b border-b-white cursor-pointer'>About</li></a>
            <a href="#solutions"><li className='hover:border-b border-b-white cursor-pointer'>Solutions</li></a>
            <a href="#process"><li className='hover:border-b border-b-white cursor-pointer'>Process</li></a>
            <a href="#contact"><li className='hover:border-b border-b-white cursor-pointer'>Contact</li></a>
        </ul>

        <div className='sm:hidden' >
            <button className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300' onClick={toggleBtn}>
            {isOpen ? <FaTimes className='text-xl text-gray-600 cursor-pointer' /> : <FaBars className='text-xl text-gray-600 cursor-pointer' />}
            </button>    
        </div>

        {/* Mobile Menu */} 
        <ul className='block space-y-5 sm:hidden absolute top-[75px] right-0 bg-amber-600 w-full shadow-lg rounded-lg p-5 transition duration-300 ease-in-out transform' style={{ display: isOpen ? 'block' : 'none' }}>
            <li className='hover:border-b border-b-white cursor-pointer'>Home</li>
            <li className='hover:border-b border-b-white cursor-pointer'>About</li>
            <li className='hover:border-b border-b-white cursor-pointer'>Services</li>
            <li className='hover:border-b border-b-white cursor-pointer'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar