import React from 'react'

function ContactPage() {
  return (
    <div className='flex items-center justify-center flex-col my-10'>
      <h2 className='font-bold text-4xl mb-10'>Contact Us</h2>
      <form action="" className='flex items-center justify-center flex-col'>
        <input className='w-[400px] my-2 p-2 rounded-xl placeholder:text-black' type="text" name="" placeholder='Enter Your Name' id="" />
        <input className='w-[400px] my-2 p-2 rounded-xl placeholder:text-black' type="email" name="" placeholder='Enter Your E-mail' id="" />
        <textarea className='w-[400px] my-2 p-2 rounded-xl placeholder:text-black resize-none' name="" placeholder='Enter Your Message' id="" cols="30" rows="10"></textarea>
        <button className='px-4 py-2 rounded-xl border-2 hover:bg-white hover:text-black mt-2' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactPage