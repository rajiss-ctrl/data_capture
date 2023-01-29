import logo from './logo.svg';
import React from 'react'
import Error from './pages/Error';
import { Route, Routes } from 'react-router-dom';
import Layout from './outlet/Layout';
// import LandingPage from './pages/LandingPage';
import Templates from './pages/Templates';  
import { Box } from '@chakra-ui/react';

function App() {
  return (

<Box className=" h-[100%]">
  <Routes>
    <Route path={'/'} element={<Layout/>}>
        {/* <Route index element={<LandingPage />}/> */}
        <Route index element={<Templates/>}/>
        {/* <Route path={'templates'} element={<Templates/>}/> */}
        {/*All*/}
        <Route path={'*'} element={<Error/>}/>
    </Route>
  </Routes>
</Box>

  );
}

export default App;
