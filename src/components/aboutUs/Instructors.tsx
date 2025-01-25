import React from 'react'
import mark1 from "@/assets/marques/mark1.jpg"
import Image from 'next/image'


const Instructors: React.FC = () => {
    const arr = Array.from({ length: 6 })
    return (
        <div>
            <h2 className='kaftan-text text-center py-16 text-4xl'>MEET OUR INSTRUCTORS</h2>

            <div className='flex flex-wrap'>
            {arr.map((item, i) => (
                <div>
                    <div className=' w-fit relative'><Image src={mark1} alt='' width={1000} className='w-44 rounded-full' />
                    <div className='absolute top-0 border-2 w-44 border-white aspect-square rounded-full translate-x-4 z-10'></div></div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Instructors
