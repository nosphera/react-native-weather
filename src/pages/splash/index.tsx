import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import { Builders, Container, Title } from './styled';

const Splash: React.FC<any> = () => {
  const img = require('../../images/clima1.png');
  return (
    <Container>
      <Builders>Builders</Builders>
      <Image source={img} />
      <Title>Clima</Title>
      <ActivityIndicator size={42}/>
    </Container>
  );
};

export default Splash;
