import moment from 'moment';
import React from 'react';
import {View} from 'react-native';
import {Bar, Container, Icon, Text} from './styled';

const RenderHourlyItem = ({item}: any) => {
  const height = 120;
  const value = Math.round((item.temp / 50) * (height * 0.5));
  const _forecastDate: Date = new Date(item.dt * 1000);
  return (
    <Container>
      <Icon
        source={{
          uri: `http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`,
        }}
      />
      <Bar height={value} />
      <View>
        <Text>{Math.round(item.temp)}º</Text>
        <Text>{moment(_forecastDate).format('HH:mm')}</Text>
      </View>
    </Container>
  );
};

export default RenderHourlyItem;
