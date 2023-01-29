import { Box, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import {FaTwitter, FaFacebook,FaLinkedin,FaInstagram } from 'react-icons/fa'
import Alliance from '../assets/images/alliance.png'
import GPlay from '../assets/icons/gplaystore.png'
import Appleplay from '../assets/icons/apple-play.png'

const Footer = () => {
  return (
    <Box padding={'96px 112px'} color={'#FFFFFF'} height={'450px'} bgGradient='linear(93.64deg, rgba(31, 45, 71, 0.89) 47.01%, rgba(31, 45, 71, 0.75) 60.17%, rgba(31, 45, 71, 0.69) 60.17%)
transform: matrix(1, 0, 0, -1, 0, 0)'>
      <Box width={'150px'}  background={'#FFFFFF'} marginBottom={'32px'} padding={'2px 10px'} border={'2px solid'} borderColor={'#FFFFFF'}><Image src={Alliance}/></Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box>
          <Text narginBottom={'15px'}>Contact Us</Text>
          <Text marginTop={'10px'}>info@alliance.com</Text>
          <Text marginTop={'10px'}>Enebe Gem (Product Designer)</Text>
          <Text marginTop={'10px'}>Raji S. Sanjo (FrontEnd ReactJs)</Text>
          <Text marginTop={'10px'}>Balogun Kabir (FrontEnd ReactJs)</Text>
          <Text marginTop={'10px'}>Jude </Text>
        </Box>
        <Box>
          <Text marginBottom={'15px'}>Connect with us on Social Media</Text>
            <Box  display={'flex'} gap={'15px'}>
          <Text color={'blue'} fontSize={'25px'}><FaTwitter/></Text>
          <Text color={'blue'} fontSize={'25px'}><FaFacebook/></Text>
          <Text color={'blue'} fontSize={'25px'}><FaInstagram/></Text>
          <Text color={'purple'} fontSize={'25px'}><FaLinkedin/></Text>
            </Box>
        </Box>
        <Box>
          <Image marginBottom={'15px'} src={Appleplay}/>
          <Image src={GPlay}/>
        </Box>
      </Box>
      <List margin={'20px 0'} display={'flex'} gap={'20px'}>
        <ListItem>2023 Alliance.  All rights reserved.</ListItem>
        <ListItem>Terms and Conditions</ListItem>
        <ListItem>Cookies</ListItem>
        <ListItem>Privacy Policy</ListItem>
        <ListItem>Security Policy</ListItem>
        <ListItem>GDPR</ListItem>
        </List>
    </Box>
  )
}

export default Footer