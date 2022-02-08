import React from 'react';
import {Text} from 'react-native';
import Capitalise from '../../../framework/helpers/capitalise';
import {
  Container,
  HeaderContainer,
  Icon,
  Shimmer,
  TemperatureContainer,
  TemperatureDecorator,
  TemperatureLabel,
} from './styled';
import {IBaseProps} from '../../../business/interfaces/iBaseProps';

interface IProps extends IBaseProps {
  weatherData: any;
}
const WeatherCard: React.FC<any> = ({weatherData, loading}: IProps) => {
  return (
    <Shimmer visible={!loading}>
      <Container>
        <HeaderContainer>
          <Icon
            source={{
              uri: `http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`,
            }}
          />
          <TemperatureContainer>
            <TemperatureLabel>{weatherData?.temp.toFixed(0)}</TemperatureLabel>
            <TemperatureDecorator>ºC</TemperatureDecorator>
          </TemperatureContainer>
        </HeaderContainer>
        <Text>{Capitalise(weatherData?.weather[0]?.description ?? '')}</Text>
      </Container>
    </Shimmer>
  );
};

export default WeatherCard;
