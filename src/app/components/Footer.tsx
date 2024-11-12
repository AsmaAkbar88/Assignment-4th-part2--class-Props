import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black p-3'>
      <div className='text-white space-x-6 text-center'>
        <Link href={'https://github.com/AsmaAkbar88?tab=repositories'} className='hover:text-blue-400  '>Git Hub</Link>
        <Link href={'https://www.linkedin.com/feed/'} className='hover:text-blue-400 '>linkedin</Link>
        <p className='text-sm m-4'> ©{new Date().getFullYear()} Asma Akbar .All rights reserved</p>

      </div>

    </footer>
  )
}

export default Footer
