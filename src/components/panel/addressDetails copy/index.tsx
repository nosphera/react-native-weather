import React from 'react';
import {Container, Label, Text} from './styled';

const RenderWarnings = (item: any, index: number) => {
  return (
    <Container key={index.toString()}>
      <Label>{item.event}</Label>
      <Text>{item.description}</Text>
    </Container>
  );
};

export default RenderWarnings;
