import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

import HeroImg from '../assets/images/heroImg.png'


const HeroSection = () => {
  return (
    <Box paddingBottom={'60px'} display={'flex'} marginTop={'98px'}>
        <Box padding={'0 112px'}>
            <Text fontSize={'24px'} color={'#1F2D47'} paddingRight={'35%'}>You can link your data's from various platforms and stay
            connected at all time.</Text>
            <Heading fontSize={'40px'} fontFamily={'Gadugi'} margin={'52px 0 68px 0'} paddingRight={'20%'} >Making Data Easier To Access, Save And Download</Heading>
            <Box color={'#D05510'} textDecor={'underline'}>Click Here To Get Started</Box>
        </Box>
        <Box marginTop={'-40px'} display={'flex'} justifyContent={'center'}>
            <Image  width={'100%'} marginRight={'13px'} src={HeroImg} alt="data capturing" />
        </Box>
    </Box>
  )
}

export default HeroSection