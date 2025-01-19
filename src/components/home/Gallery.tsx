import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'
import gallery10 from '@/assets/gallery10.webp'
import gallery2 from '@/assets/gallery2.jpg'
import gallery3 from '@/assets/gallery3.jpg'
import gallery4 from '@/assets/gallery4.jpg'
import gallery5 from '@/assets/gallery5.jpg'
import gallery6 from '@/assets/gallery6.jpg'
import gallery7 from '@/assets/gallery7.jpg'
import gallery9 from '@/assets/gallery9.webp'


const Gallery = () => {
  return (
    <Flex width={'100%'} p={{ lg: 4, '2xl': 40 }} pb={{lg:'120px'}} flexDir={{base:'column', lg:'row'}} >
      <Box width={{base:'100%', lg:'66%'}}>
        <Flex width={'100%'}>
          <Box width={'full'} p={2}><Image src={gallery9} alt='camio' width={400} height={420} className='w-full rounded-2xl' /></Box>
          <Box width={'full'} >
            <Box width={'full'} p={2}><Image src={gallery2} alt='carimage' width={400} height={300} className='w-full rounded-2xl' /></Box>
            <Box width={'full'} p={2}><Image src={gallery3} alt='logo' className='w-full rounded-2xl' height={120} width={400} /></Box>
          </Box>
        </Flex>
        <Box width={'100%'} p={2} display={{base:"none", lg:"block"}}>
          <Image src={gallery4} alt='camio' width={800} height={60} className='w-full rounded-2xl' />
        </Box>
      </Box>
      <Flex width={{base:'100%', lg:'33%'}} flexDir={'column'} display={{base:"none", lg:"block"}}>
        <Box p={2}><Image src={gallery5} alt='logo' className='w-full rounded-2xl' height={60} width={400} /></Box>
        <Box p={2}><Image src={gallery10} alt='camio' width={400} height={520} className='h-full w-full rounded-2xl object-fill ' /></Box>
        {/* <Box><Image src={camio} alt='camio' width={400} height={300} className='w-full' /></Box> */}
      </Flex>
    </Flex>
  )
}

export default Gallery
