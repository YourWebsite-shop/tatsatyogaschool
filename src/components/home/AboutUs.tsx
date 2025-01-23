import Image from 'next/image'
import React from 'react'
import gal9 from "@/assets/gallery9.webp"
const AboutUs: React.FC = () => {
  return (
    <div className='bg-[#EAE6E2] flex '>
      <div>
        <Image src={gal9} alt='' className='rounded-tr-[50px]' />
      </div>
      <div>
        <h2 className='kaftan-text lg:text-6xl'>ABOUT US</h2>
        <div>
          <h5 className='font-semibold'>SPACE</h5>
          <p>Harmony Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, sint in dolorum mollitia, neque facere dolorem laboriosam nisi ducimus perferendis quas distinctio. Itaque provident nesciunt error adipisci fuga excepturi nulla quia sapiente possimus vero, reiciendis dolor, saepe tenetur nam natus numquam aliquam ab culpa, illo earum. Placeat, vel. Nesciunt, rerum.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
