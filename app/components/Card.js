import React from 'react'
import { BsHouses } from 'react-icons/bs'
import { BiBuildingHouse, BiBed } from 'react-icons/bi'
import { PiToilet } from 'react-icons/pi'

const Card = ({data}) => {
  return (
    <div className='card p-4 max-w-[400px] rounded-lg'>
        <div className='relative w-full h-[200px] mb-2'>
          <img src='./miinmuebleHero.jpg' alt='inmuebleImg' className='w-full h-[200px] rounded-lg '/>
          <div className='absolute top-1.5 left-1.5 px-2 card rounded-full'>
            <span className='text-sm'>{data.modalidad}</span>
          </div>
          <div className='absolute bottom-1 right-1 p-2 card rounded-full'>
            <span className='text-xl'><BsHouses /></span>
          </div>
        </div>
        <p className='font-bold mb-2'>${data.precio}</p>
        <p className='text-md mb-1'>{data.residencial || '-'}</p>
        <p className='text-sm mb-2'>{data. colonia}, {data.municipio}</p>
        <div className='w-full flex justify-around'>
          <div className='flex gap-1'>
            <span><BiBuildingHouse /></span>
            <p className='text-sm'>{data.metrosConst}<span className='text-xs'>mt2</span></p>
          </div>
          <div className='flex gap-1'>
            <span><BiBed /></span>
            <p className='text-sm'>{data.recamaras}</p>
          </div>
          <div className='flex gap-1'>
            <span><PiToilet /></span>
            <p className='text-sm'>{data.baños}</p>
          </div>
        </div>
    </div>
  )
}

export default Card