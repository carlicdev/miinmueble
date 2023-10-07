import { BsHouses } from 'react-icons/bs'

const Logo = () => {
  return (
    <div className='flex items-end'>
        <span className='text-4xl mb-1 text-blue-600'><BsHouses /></span>
        <p className='font-bold text-3xl text-emerald-500'>mi<span className='text-blue-600'>inmueble</span></p>
    </div>
  )
}

export default Logo