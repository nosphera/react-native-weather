import React from 'react';
import {weekDayShort} from '../../../business/enum/weekDays';
import {Container, Icon, Text} from './styled';

const RenderDailyItem = ({item}: any) => {
  return (
    <Container>
      <Text>{weekDayShort[new Date(item.dt * 1000).getDay()]}</Text>
      <Icon
        source={{
          uri: `http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`,
        }}
      />
      <Text>
        {Math.round(item.temp.min)}º / {Math.round(item.temp.max)}º
      </Text>
    </Container>
  );
};

export default RenderDailyItem;
