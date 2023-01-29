import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Line from '../../assets/icons/line.png'
import Google from '../../assets/icons/googleIcon.png'
import Facebook from '../../assets/icons/facebook.svg'

const SignUp = () => {
  return (
    <Box paddingBottom={'90px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
        <Box width={'300px'}>
        <Box padding={'100px 0'}>
            <Heading fontSize={'40px'} color={'#1F2D47'}>Sign Up</Heading>
            <Text fontSize={'20px'} color={'#1F2D47'}>Lets get you started</Text>
        </Box>
            <Box>
        <FormControl marginBottom={'32px'} isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='gemenebe@gmail.com' />
        </FormControl>
        <FormControl marginBottom={'32px'} isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder='**********' />
        </FormControl>
            <Button marginBottom={'32px'} width={'100%'} padding={'10px 0'} color={'#FFFFFF'} background={'#D05510'} border={'none'} _hover={'none'}>Create  Account</Button>
            </Box>
            <Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}><Image width={'72px'} height={'3px'} src={Line}/>Or Login Up with<Image width={'72px'} height={'3px'} src={Line}/></Box>
                <Box margin={'30px 0'} display={'flex'} justifyContent={'center'} gap={'20px'} alignItems={'center'}><Image src={Google}/><Image src={Facebook}/></Box>
            </Box>

            <Text>Already have an account? <Button border={'none'} background={'teansparent'} color={'#D05510'} _hover={'none'}>Sign In</Button></Text>
    </Box>
    </Box>
  )
}

export default SignUp