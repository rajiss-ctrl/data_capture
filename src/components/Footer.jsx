import { Box, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box padding={'96px 112px'} color={'#FFFFFF'} height={'429px'} bgGradient='linear(93.64deg, rgba(31, 45, 71, 0.89) 47.01%, rgba(31, 45, 71, 0.75) 60.17%, rgba(31, 45, 71, 0.69) 60.17%)
transform: matrix(1, 0, 0, -1, 0, 0)'>
      {/* <Image src={}/> */}
      <Box>
        <Box>
          <Text>Contact Us</Text>
          <Text>info@alliance.com</Text>
          <Text>Contact</Text>
          <Text>Contact</Text>
        </Box>
        <Box>
          <Text>Connect with us on Social Media</Text>
          <Text>icons</Text>
        </Box>
        <Box>
          {/* <Image src={}/>
          <Image src={}/> */}
        </Box>
      </Box>
      <List display={'flex'} gap={'20px'}>
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