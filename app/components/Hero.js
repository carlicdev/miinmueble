import React from 'react'

const Hero = () => {
  return (
    <div 
      className=' no-repeat w-full h-[500px] bg-cover' 
      style={{ backgroundImage: 'url(./miinmuebleHero.jpg)'}}
      >
        <div className='bg-black bg-opacity-30'>
          <div className='max-w-8xl w-full mx-auto  h-[500px] flex flex-col justify-center items-center px-2 lg:px-0'>
              <div className='mb-5 lg:mb-10'>
                <h2 className='text-4xl lg:text-5xl font-black text-white text-center'>Encuentra el <span className='text-blue-600'>hogar</span><br/>de tus sueños</h2>
              </div>
            <div className='flex flex-col'>
              <div className='card p-2 rounded-t-lg flex gap-4 max-w-[250px] lg:max-w-[280px]'>
                <div className='lg:text-lg p-3 rounded-lg selected-link'>Casas</div>
                <div className='lg:text-lg p-3'>Departamentos</div>
              </div>
              <div className='card p-2 flex flex-wrap  gap-2 rounded-tr-lg lg:max-w-[550px]'>
                <select className='w-full lg:w-[120px] card p-2 lg:text-lg border border-gray-500 rounded-lg outline-none focus:outline-blue-800'>
                  <option>Comprar</option>
                  <option>Rentar</option>
                </select>
                <input className='w-full card p-2 lg:text-lg border border-gray-500 rounded-lg lg:w-[400px] outline-none focus:outline-blue-800'/>
              </div>
              <div className='card p-2 pb-3 rounded-b-lg lg:max-w-[550px]'>
                <button className='w-full py-3 bg-blue-600 rounded-lg text-white font-medium'>
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero