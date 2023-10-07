import React from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='w-full card '>
      <div className='max-w-8xl mx-auto px-2 py-4 flex items-center'>
        <div>
          <Logo />
        </div>
        <div className='mr-0 ml-auto'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar