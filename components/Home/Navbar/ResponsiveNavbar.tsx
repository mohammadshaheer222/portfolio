"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);
  return (
    <div className=''>
      <Navbar openNav={openNav}/>
      <MobileNavbar showNav={showNav} closeNav={closeNav}/>
      </div>
  )
}

export default ResponsiveNavbar