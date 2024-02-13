import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex items-center justify-around py-5 sticky top-0 border-b-2 bg-gradient-to-b from-black to-transparent mt-5 z-50'>
        <h3 className='font-bold text-3xl'>Cryptos</h3>
        <div>
            <Link className=' text-lg px-4 py-2 rounded-xl hover:bg-white hover:text-black' href="/">Home</Link>
            <Link className=' text-lg px-4 py-2 rounded-xl hover:bg-white hover:text-black' href="/about">About</Link>
            <Link className=' text-lg px-4 py-2 rounded-xl hover:bg-white hover:text-black' href="/cryptocurrency">Cryptocurrency</Link>
            <Link className=' text-lg px-4 py-2 rounded-xl hover:bg-white hover:text-black' href="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Header