import { Box } from '@chakra-ui/react'
import React from 'react'
import CallToAction from '../components/CallToAction'
import FeaatureSection from '../components/FeatureSection'
import HeroSection from '../components/HeroSection'
import Sponsor from '../components/Sponsor'

const LandingPage = () => {
  return (
    <Box width={'100%'}>
        <HeroSection/>
        <FeaatureSection/>
        <CallToAction/>
        <Sponsor/>
    </Box>
  )
}

export default LandingPage