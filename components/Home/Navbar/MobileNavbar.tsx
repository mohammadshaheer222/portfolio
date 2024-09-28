import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNavbar = ({showNav, closeNav}: Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div className='p-'>
    <div className={`fixed inset-0 ${navOpen} transform transition-all duration-300  bg-black opacity-60 z-30 w-full h-screen`}></div>
          <div className={`text-white fixed ${navOpen} transform transition-all duration-300 delay-300 justify-center flex flex-col h-full w-[60%] bg-black z-50 space-y-6`}>
        {
          navLinks.map((navlinks) => (
            <Link key={navlinks.id} href={navlinks.url}>
              <p className='text-xl ml-12  '>{navlinks.label}</p>
            </Link>
          ))

        }
        <CgClose onClick={closeNav} className='absolute -top-2 right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />
          </div>
    </div>
  )
}

export default MobileNavbar