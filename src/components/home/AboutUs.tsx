import Image from 'next/image'
import React from 'react'
import gal9 from "@/assets/gallery9.webp"
const AboutUs: React.FC = () => {
  return (
    <>

      <div className='bg-[#EAE6E2]  xl:flex justify-around  py-32 hidden' >
        <div className='w-[25vw] px-10 flex items-end'>
          <Image src={gal9} alt='' className='rounded-tr-[50px] w-full rounded-bl-[50px]' data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" />
        </div>
        <div className='flex flex-col '>
          <div>
            <div className='flex justify-around'>

              <div className='w-[50vw] p-10'>
                <h2 className='kaftan-text lg:text-6xl text-center' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">ABOUT US</h2>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <h5 className='font-semibold  text-lg mt-10'>SPACE</h5>
                <p>Harmony Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, sint in dolorum mollitia, neque facere dolorem laboriosam nisi ducimus perferendis quas distinctio. Itaque provident nesciunt error adipisci. </p>
            
                <p className='py-2'>Harmony Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, sint in dolorum mollitia, neque facere dolorem laboriosam nisi ducimus perferendis quas distinctio. Itaque provident nesciunt error adipisci </p>

                <h5 className='font-semibold text-lg mt-10'>VALUES</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam in ex et quisquam, nihil id, laboriosam, exercitationem debitis hic sunt iusto. Ad labore quasi quas nisi. Suscipit impedit iusto voluptas corrupti quae voluptates aperiam voluptatum mollitia, eaque at quasi cupiditate perferendis aspernatur pariatur, ducimus unde ea omnis ut eos?</p>
                </div>
              </div>

              <div className='w-[25vw] p-10'><Image src={gal9} alt='' className='w-full rounded-br-[50px] rounded-tl-[50px]' data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" /></div>

            </div>
            <div className='pl-10 flex justify-between pr-24' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div>
                <span className='block text-3xl text-orange-400 font-bold'>8</span>
                Years Of Experience
              </div>
              <div>
                <span className='block text-3xl text-orange-400 font-bold'>6</span>
                Types of Classes
              </div>
              <div>
                <span className='block text-3xl text-orange-400 font-bold'>1000+</span>
                Satisfied Clients
              </div>
              <div>
                <span className='block text-3xl text-orange-400 font-bold'>95%</span>
                Positive Reviews
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className='bg-[#EAE6E2] md:px-[100px] px-2 xl:hidden pb-20'>
        <h4 className='kaftan-text text-center text-3xl py-20' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">ABOUT US</h4>

        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">


          <h5 className='text-lg font-semibold py-1'>SPACE</h5>
          <p className='font-[600] text-sm text-gray-600'>Harmony Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, sint in dolorum mollitia, neque facere dolorem laboriosam nisi ducimus perferendis quas distinctio. Itaque provident nesciunt error adipisci </p>
  
          <p className='font-[600] text-sm text-gray-600 py-4 '>Harmony Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, sint in dolorum mollitia, neque facere dolorem laboriosam nisi ducimus perferendis quas distinctio. Itaque provident nesciunt error adipisci </p>
        </div>


        <div className='flex  w-full  '>
        <Image src={gal9} alt='' className='rounded-tr-[50px]  pr-2  w-1/2  rounded-bl-[50px]' data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" />
        <Image src={gal9} alt='' className=' rounded-br-[50px]  pl-2 w-1/2 rounded-tl-[50px]' data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" />
        </div>

        <div className='py-2' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <h5 className='text-lg font-semibold py-1'>VALUES</h5>
          <p className='font-[600] text-sm text-gray-600'>Harmony Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, sint in dolorum mollitia, neque facere dolorem laboriosam nisi ducimus perferendis quas distinctio. Itaque provident nesciunt error adipisci </p>
        </div>

        <div className='flex-wrap flex justify-start gap-x-10 gap-y-6 '>
              <div>
                <span className='block text-3xl text-orange-400'>8</span>
                Years Of Experience
              </div>
              <div>
                <span className='block text-3xl text-orange-400'>6</span>
                Types of Classes
              </div>
              <div>
                <span className='block text-3xl text-orange-400'>1000+</span>
                 Satisfied Students
              </div>
              <div>
                <span className='block text-3xl text-orange-400'>95%</span>
                Positive Reviews
              </div>
            </div>
      </div>
    </>
  )
}

export default AboutUs
