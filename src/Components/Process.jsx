import React from 'react'

const Process = () => {
  return (
    <div id='contact' className='flex flex-col sm:flex-row justify-center space-x-28 px-10 py-15'>
        <div>
            <h1 className='text-5xl font-extrabold text-gray-800 mb-5'>How we get our <br /> work done </h1>
        </div>

        <div className='text-lg space-y-5'>
            <li>Consultations - We understand your goals and target users</li>
            <li>Planning and Design - We craft structure and visuals aligned with your brand</li>
            <li>Development - Using modern stacks to bring your solutions to live</li>
            <li>Launch and Support - We deploy, monitor and support your live product</li>
        </div>
    </div>
  )
}

export default Process