import React from 'react'
import cryptoAboutPageImage from '../../assets/cryptoAboutPageImage.jpeg'
import Image from 'next/image'
function AboutPage() {
  return (
    <div className='flex items-center justify-around mx-20 my-10'>
      <Image src={cryptoAboutPageImage} height={1000} width={500} alt='cryptoAboutPageImage' />
      <div className='mx-10'>
        <h3 className='text-center mb-20 text-4xl font-bold'>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est molestias ut, repellendus explicabo dolor dicta magnam? Aperiam atque esse omnis rerum, rem quidem necessitatibus, magnam ullam corrupti, inventore natus eligendi sequi! Numquam, vel. Cumque dicta voluptatibus molestiae totam sequi! Corrupti mollitia fugiat aperiam recusandae dolore? Quia, eum molestiae, dicta saepe sequi, itaque necessitatibus ex quod facilis fugiat amet enim aspernatur sunt consequuntur? Cupiditate nihil, repudiandae nulla deserunt itaque modi molestias quo similique, cum quia ex optio consequuntur amet impedit, illum dolores alias. Voluptatum tenetur ullam, eligendi fuga aperiam at adipisci beatae odit sed eum. Quia error eligendi quos magni.</p>
      </div>
    </div>
  )
}

export default AboutPage