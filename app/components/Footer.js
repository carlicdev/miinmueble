import React from 'react'
import Logo from './Logo'
import { PiTrademarkRegisteredLight } from 'react-icons/pi';
import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full card'>
      <div className='max-w-8xl w-full mx-auto pt-10'>
        <div className='flex flex-wrap items-start border-b border-gray-700 pb-5'>
          <div className='w-full md:w-1/2 lg:w-1/4 flex justify-center mb-5'>
            <Logo />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col mb-5'>
            <div className='mx-auto'>
              <p className='font-bold text-lg mb-2'>Encuentra tu Hogar</p>
              <p className='mb-2'>Casas en Venta</p>
              <p className='mb-2'>Casas en Renta</p>
              <p className='mb-2'>Departamentos en Venta</p>
              <p className='mb-2'>Departamentos en Renta</p>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col mb-5'>
            <div className='mx-auto'>
              <p className='font-bold text-lg mb-2'>Nosotros</p>
              <p className='mb-2'>Quienes Somos</p>
              <p className='mb-2'>Preguntas Frecuentes</p>
              <p className='mb-2'>Publica tu Propiedad</p>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center'>
            <div className='mb-4'>
              <button className='px-5 py-2 bg-blue-600 text-white rounded-lg'>
                Contacto
              </button>
            </div>
            <div className='mx-auto flex gap-5 '>
              <span className='text-5xl'><FaFacebookSquare /></span>
              <span className='text-5xl'><FaInstagramSquare /></span>
              <span className='text-5xl'><FaTwitterSquare /></span>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex gap-1 ml-0 mr-auto p-2'>
            <span className='text-sm text-gray-500'><PiTrademarkRegisteredLight /></span>
            <p className='text-xs text-gray-500'>miinmueble | 2023</p>
          </div>
          <div className='flex gap-4 ml-auto mr-0 p-2'>
          <p className='text-xs text-gray-500'>Términos y Condiciones</p>
            <p className='text-xs text-gray-500'>Aviso de Privacidad</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer