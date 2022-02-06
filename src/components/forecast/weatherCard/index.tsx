import React from 'react';
import {Image, Text, View} from 'react-native';
import IWeatherData from '../../../business/interfaces/iWeatherData';
import moment from 'moment';
import Capitalise from '../../../framework/helpers/capitalise';

const WeatherCard: React.FC<any> = ({weatherData}: any) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`,
          }}
          style={{
            height: 64,
            width: 64,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            flexGrow: 10,
          }}>
          <Text
            style={{
              fontSize: 48,
              fontWeight: 'bold',
            }}>
            {weatherData?.temp.toFixed(0)}
          </Text>
          <Text
            style={{
              marginTop: 12,
            }}>
            ºC
          </Text>
        </View>
      </View>
      <Text>{Capitalise(weatherData?.weather[0]?.description ?? '')}</Text>
      </>
  );
};

export default WeatherCard;
