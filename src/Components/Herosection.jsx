import React from 'react'
import { FaWhatsapp } from "react-icons/fa"

const Herosection = () => {
  return (
    <div id='home' className='hero pt-28  h-10/12 md:h-dvh flex items-center p-10'>
        <div>
            <h1 className='text-4xl md:text-5xl text-white font-bold'>Professional web  development <br/> service that drive returns</h1>
            <p className='text-white text-lg mt-5'>We build fast, response and user-focused websites tailored <br /> to meet your business goals - whether you are a starting from <br /> scratch or leveling up your existing website </p>
            <button className='animate-bounce p-3 bg-white text-gray-800 rounded-full w-fit mt-7'>
              <a href="https://api.whatsapp.com/send?phone=2347086495645&text=Hi%20Semiat!"  target="_blank" rel="noopener noreferrer">Let's connect</a>
            </button>
        </div>
    </div>
  )
}

export default Herosection