import { Box, Button, Image, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import Alliance from '../assets/images/alliance.png'

const Navbar = () => {
  return (
    <Box boxShadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'} background={'#FFFFFF'} width={'100%'} fontFamily={'Gidugu'} fobtSize={'16px'} display={'flex'} padding={'5px 112px'} alignItems={'center'} justifyContent={'space-between'} >
        <Box ><Link to='/'><Image src={Alliance} alt="alliance" /></Link></Box>
        <List display={'flex'}gap={'32px'} justifyContent={'space-between'}>
            <ListItem cursor={'pointer'}><NavLink  to='/'>Templates</NavLink></ListItem>
            <ListItem cursor={'pointer'}>Sector</ListItem>
            <ListItem cursor={'pointer'}>My Form</ListItem>
            <ListItem cursor={'pointer'}>Products</ListItem>
            <ListItem cursor={'pointer'}>Integration</ListItem>
            <ListItem cursor={'pointer'}>Pricing</ListItem>
        </List>
        <List display={'flex'} gap={'44px'} justifyContent={'space-between'}>
            <ListItem boxShadow={''} cursor={'pointer'} color={'#000000'} focusBorderColor={'none'} borderColor={'#000000'} border={'1px'}  borderRadius={'4px'}><Button _hover={'none'} background={'#FBFBFD'} border={'none'}>Login In</Button></ListItem>
            <ListItem cursor={'pointer'} color={'#FFFFFF'} focusBorderColor={'none'}><Button _hover={'none'} background={'#D05510'} borderRadius={'4px'}>Sign Up</Button></ListItem>
        </List>
    </Box>
  )
}

export default Navbar