import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const FeaatureSection = () => {
  return (
    <Box width={'100%'} background={'#F6F8FA;'} paddingBottom={'100px'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
        <Heading margin={'130px 0'}> Our Outstanding Features</Heading>
        <Box display={'flex'}  justifyContent={'space-between'}>
            <Box  display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}  width={'30%'} padding={'10px'}>
                <Box background={' #263858;'} width={'314px'} height={'480px'}></Box>
                <Box width={'314px'}>
                    <Heading padding={'20px 0'} fontSize={'24px'} color={'#1F2D47'}>Data Capture</Heading>
                    <Text fontSize={'18px'}>Capture Data using the mobile app, including photos and GPS coordinates.</Text>
                </Box>
            </Box>
            <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}  width={'30%'} padding={'10px'}>
                <Box background={' #263858;'} width={'314px'} height={'480px'}></Box>
                <Box width={'314px'} >
                    <Heading padding={'20px 0'} fontSize={'24px'} color={'#1F2D47'}>Data Capture</Heading>
                    <Text fontSize={'18px'}>Capture Data using the mobile app, including photos and GPS coordinates.</Text>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}  width={'30%'} padding={'10px'}>
                <Box background={' #263858;'} width={'314px'} height={'480px'}></Box>
                <Box width={'314px'} >
                    <Heading  padding={'20px 0'} fontSize={'24px'} color={'#1F2D47'}>Data Capture</Heading>
                    <Text fontSize={'18px'}>Capture Data using the mobile app, including photos and GPS coordinates.</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default FeaatureSection