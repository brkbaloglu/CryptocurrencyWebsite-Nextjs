import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div className='grid grid-cols-3 py-10 h-[300px]'>
      <div className='flex items-center justify-center'>
        <h2 className='text-4xl font-bold'>Cryptos</h2>
      </div>
      <div className='flex items-center justify-center flex-col border-x-2'>
      <div className=''>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/"><FaArrowRight className='mx-2' />Payment Options</Link>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/"><FaArrowRight className='mx-2' />Management</Link>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/"><FaArrowRight className='mx-2' />Business Partners</Link>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/"><FaArrowRight className='mx-2' />Protection of Personal Data</Link>
      </div>
      </div>
      <div className='flex items-center justify-center flex-col'>
      <div>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/"><FaArrowRight className='mx-2' />Home</Link>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/about"><FaArrowRight className='mx-2' />About Us</Link>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/cryptocurrency"><FaArrowRight className='mx-2' />Cryptocurrencies</Link>
        <Link className='flex items-center hover:translate-x-4 duration-300' href="/contact"><FaArrowRight className='mx-2' />Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Footer