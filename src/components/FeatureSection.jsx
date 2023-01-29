import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import FeatureImg1 from '../assets/icons/f-img1.png'
import FeatureImg2 from '../assets/icons/f-img2.png'
import FeatureImg3 from '../assets/icons/f-img3.png'

const FeaatureSection = () => {
  return (
    <Box width={'100%'} background={'#F6F8FA;'} paddingBottom={'100px'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
        <Heading margin={'130px 0'}> Our Outstanding Features</Heading>
        <Box display={'flex'}  justifyContent={'space-between'}>
            <Box  display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}  width={'30%'} height={'600px'} padding={'10px'}>
                <Box padding={'15px'} display={'grid'} placeContent={'center'} border={'2px solid'} borderColor={'#000000'}  width={'314px'}  height={'480px'}><Image width={'400px'} src={FeatureImg1}/></Box>
                <Box width={'314px'}>
                    <Heading padding={'20px 0'} fontSize={'24px'} color={'#1F2D47'}>Data Capture</Heading>
                    <Text fontSize={'18px'}>Capture Data using the mobile app, including photos and GPS coordinates.</Text>
                </Box>
            </Box>
            <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}  width={'30%'} height={'600px'} padding={'10px'}>
                <Box padding={'15px'} display={'grid'} placeContent={'center'} border={'2px solid'} borderColor={'#000000'}  width={'314px'} height={'480px'}><Image width={'400px'} src={FeatureImg2}/></Box>
                <Box width={'314px'} >
                    <Heading padding={'20px 0'} fontSize={'24px'} color={'#1F2D47'}>Form Builder</Heading>
                    <Text fontSize={'18px'}>Drag and drop form input fields of different types for each dataset,</Text>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}  width={'30%'} height={'600px'} padding={'10px'}>
                <Box padding={'15px'} display={'grid'} placeContent={'center'} border={'2px solid'} borderColor={'#000000'} width={'314px'} height={'480px'}><Image width={'400px'} src={FeatureImg3}/></Box>
                <Box width={'314px'} >
                    <Heading  padding={'20px 0'} fontSize={'24px'} color={'#1F2D47'}>Custom Dataset Creation</Heading>
                    <Text fontSize={'18px'}> You can create your own custom data set of fields requiredment.</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default FeaatureSection