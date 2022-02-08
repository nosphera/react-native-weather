import React from 'react';
import {Icon, Label, Touchable} from './styled';

const RenderCitySearchItem = ({
  country,
  icon,
  name,
  onSelect,
  position,
}: any) => {
  return (
    <Touchable
      onPress={() => {
        onSelect(position);
      }}>
      <Icon
        source={{
          uri: `http://openweathermap.org/img/w/${icon}.png`,
        }}
      />
      <Label>{`${name}, ${country}`}</Label>
    </Touchable>
  );
};

export default RenderCitySearchItem;
