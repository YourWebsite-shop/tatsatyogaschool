import Image from 'next/image'
import React from 'react'
import heroImg from "@/assets/home/yoga.jpg"
import logo from "@/assets/Logo.png"
const Hero: React.FC = () => {
  return (
    <div className='bg-[#F67D49] px-[2px]'>
      <nav>
        <ul className='flex text-sm text-white justify-between px-10 py-2 items-center'>
          <li>Home</li>
          <li>About</li>
          <Image src={logo} alt='logo' width={1000} height={1000} className='w-16' />
          <li>Some2</li>
          <li>Some3</li>
        </ul>
      </nav>
      <div>
        <div className='absolute left-1/2 w-max -translate-x-1/2 text-center'>
          <h1 className='lg:text-8xl text-[#FFFFFF] kaftan-text lg:pt-14'>Tatsat Yoga School</h1>
          <div><Image src={logo} alt='' width={1000} className='w-44 mx-auto my-14' /></div>
          <p className='text-center text-white lg:max-w-[850px]'>Discover the profound connection between mind, body, and spirit at Tatsat Yoga School. Join us to deepen your practice and unlock a life of balance and tranquility.</p>
          <button className='bg-[#F67D49] text-white  px-8 py-2 rounded-full my-10'>Book Now</button>
        </div>
        <Image src={heroImg} alt='' width={1000} height={1000} className='w-full h-auto rounded-t-[60px]' />
      </div>
    </div>
  )
}

export default Hero
