import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Line from '../../assets/icons/line.png'
import Google from '../../assets/icons/googleIcon.png'
import Facebook from '../../assets/icons/facebook.svg'

const SignIn = () => {
  return (
    <Box paddingBottom={'90px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
        <Box width={'300px'}>
        <Box padding={'100px 0'}>
            <Heading fontSize={'40px'} color={'#1F2D47'}>Hello There!</Heading>
            <Text fontSize={'20px'} color={'#1F2D47'}>Sign into your account</Text>
        </Box>
            <Box>
        <FormControl marginBottom={'32px'} isRequired>
            <FormLabel>Email</FormLabel>
            <Input border={'1px solid'} _hover={'none'} outline={'none'} height={'55px'} placeholder='gemenebe@gmail.com' />
        </FormControl>
        <FormControl marginBottom={'32px'} isRequired>
            <FormLabel>Password</FormLabel>
            <Input border={'1px solid'} _hover={'none'} outline={'none'} height={'55px'} placeholder='**********' />
        </FormControl>
            
            <Box position={'relative'}>
            <Button height={'55px'} marginBottom={'32px'} width={'100%'} padding={'10px 0'} color={'#FFFFFF'} background={'#D05510'} border={'none'} _hover={'none'}>Log In</Button>
            <Box display={'flex'} justifyContent={'right'}  width={'100%'}>
             
              <Button position={'absolute'} right={'0'} top={'45px'} border={'none'} _hover={'none'} background={'none'} color={'#D05510'}>Forgot Password?</Button>
            
            </Box>
            </Box>
            </Box>
            <Box>
                <Box display={'flex'} justifyContent={'space-between'} marginTop={'20px'} alignItems={'center'}><Image width={'72px'} height={'3px'} src={Line}/>Or Log In with<Image width={'72px'} height={'3px'} src={Line}/></Box>
                <Box margin={'30px 0'} display={'flex'} justifyContent={'center'} gap={'20px'} alignItems={'center'}><Image src={Google}/><Image src={Facebook}/></Box>
            </Box>

            <Text>Already have an account? <Button border={'none'} background={'teansparent'} color={'#D05510'} _hover={'none'}>Sign Up</Button></Text>
    </Box>
    </Box>
  )
}

export default SignIn