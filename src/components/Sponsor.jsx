import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Mtn from '../assets/icons/mtn.png'
import Coat from '../assets/icons/coat-of-arm.png'
import Tech from '../assets/icons/tech-hub.png'
import Ntda from '../assets/icons/ntda.png'
import Undp from '../assets/icons/undp.png'

const Sponsor = () => {
  return (
    <Box height={'288px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
        <Heading fontSize={'40px'} color={'#1F2D47'} marginBottom={'32px'}>Our Sponsors</Heading>
    <Box display={'flex'} gap={'20px'}>
        <Image src={Mtn} alt=""/>
        <Image src={Coat} alt=""/>
        <Image src={Tech} alt=""/>
        <Image src={Ntda} alt=""/>
        <Image src={Undp} alt=""/>
    </Box>
    </Box>
  )
}

export default Sponsor