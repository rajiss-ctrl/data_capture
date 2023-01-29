import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'

const CallToAction = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} height={'389px'} background={'linear-gradient(280.01deg, rgba(31, 45, 71, 0.89) 32.29%, rgba(31, 45, 71, 0.75) 42.61%, rgba(31, 45, 71, 0.69) 42.61%)'}>
        <Heading fontSize={'40px'} color={'#FCFDFE'} marginBottom={'38px'}>Want to put your data’s together in no time?</Heading>
        <Button background={'#D05510;'} padding={'8px 40px'}>Get Started</Button>
    </Box>
  )
}

export default CallToAction;