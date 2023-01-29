import logo from './logo.svg';
import React from 'react'
import Error from './pages/Error';
import { Route, Routes } from 'react-router-dom';
import Layout from './outlet/Layout';
// import LandingPage from './pages/LandingPage';
import Templates from './pages/Templates';  
import { Box } from '@chakra-ui/react';
import FeaatureSection from './components/FeatureSection';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import MyForm from './pages/MyForm';

function App() {
  return (

<Box className=" h-[100%]">
  <Routes>
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<LandingPage />}/>
        <Route path='templates' element={<Templates/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='myform' element={<MyForm/>}/>
        {/* <Route path={'templates'} element={<Templates/>}/> */}
        {/*All*/}
        <Route path={'*'} element={<Error/>}/>
    </Route>
  </Routes>
</Box>

  );
}

export default App;
