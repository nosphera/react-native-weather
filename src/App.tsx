/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Splash from './pages/splash';
const App = () => {
  moment.locale('pt-br');
  const[firstLoad,setFirstLoad] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setFirstLoad(false)
    }, 2000)
  },[])
  if (firstLoad){
    return <Splash />
  }
  return <Home />;
};

export default App;
