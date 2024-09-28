import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav : () => void
}

const Navbar = ({openNav}: Props) => {
  return (
    <div className='fixed top-0 left-0 right-0 z-20 bg-blue-50 px-4 py-2 m-4 rounded-sm'>
      <div className='flex justify-between items-center mx-auto'>
          <h4 className='font-semibold'>Mohammad Shaheer</h4>
      <div className='hidden lg:flex items-center space-x-10'>
        {
          navLinks.map((navlinks) => (
            <Link key={navlinks.id} href={navlinks.url}>
              <p>{navlinks.label}</p>
            </Link>
          ))
        }
      </div>
        <div className='lg:hidden'>
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer lg:hidden'/>
        </div>
      </div>

    </div>
  )
}

export default Navbar