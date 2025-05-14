import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col sm:flex-row  justify-around p-10 bg-gray-200'>
        <div>
            <h1 className='text-6xl font-extrabold text-gray-800 mb-5'>Get in <br /> touch </h1>
        </div>

        <div className='text-lg space-y-5'>
            <div>
                <h3 className='font-bold'>Email address:</h3>
                <p className='it'><a href="mailto:mailto:balogunsemiat2019@gmail.com" target='_blank' rel='noopener noreferrer'>balogunsemiat2019@gmail.com</a></p>
            </div>

            <div>
                <h3 className='font-bold'>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/semiat-balogun-a4b06b27b/">Balogun Semiat</a></p>
            </div>

            <div>
                <h3 className='font-bold'>Phone</h3>
                <p><a href="tel:+2347086495645">07086495645</a></p>
            </div>

            <div>
                <h3 className='font-bold'>WhatsApp</h3>
                <p><a href="https://api.whatsapp.com/send?phone=2347086495645&text=Hi%20Semiat!"  target="_blank" rel="noopener noreferrer">07086495645</a></p>
            </div>

            <div>
                <h3 className='font-bold'>Facebook</h3>
                <p><a href="https://www.facebook.com/semiat.balogun.18?mibextid=LQQJ4d">Balogun Semiat Abosede</a></p>
            </div>
        </div>
    </div>
  )
}

export default Contact