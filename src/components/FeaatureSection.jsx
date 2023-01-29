import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const FeaatureSection = () => {
  return (
    <Box background={'#F6F8FA;'}>
        <Heading margin={'130px 0'}> Our Outstanding Features</Heading>
        <Box>
            <Box padding={'10px'}>
                <Box background={' #263858;'} width={'314px'} height={'480px'}></Box>
                <Box>
                    <Heading fontSize={'24px'} color={'#1F2D47'}>Data Capture</Heading>
                    <Text fontSize={'18px'}>Capture Data using the mobile app, including photos and GPS coordinates.</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default FeaatureSection