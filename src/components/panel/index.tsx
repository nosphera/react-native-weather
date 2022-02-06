import React from 'react';
import {
  FlatList,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import IWeatherData from '../../business/interfaces/iWeatherData';
import WeatherCard from '../forecast/weatherCard';

const semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const renderAlert = (item: any, index: number) => {
  return (
    <View key={index.toString()}>
      <Text>{item.event}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};
const renderItem = ({item}: any) => {
  return (
    <View
      style={{
        width: 72,
        height: 128,
        alignContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
        }}>
        {semana[new Date(item.dt * 1000).getDay()]}
      </Text>
      <Image
        source={{
          uri: `http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`,
        }}
        style={{
          height: 48,
          width: 48,
        }}
        resizeMode={'contain'}
      />
      <Text>
        {Math.round(item.temp.min)}º / {Math.round(item.temp.max)}º
      </Text>
    </View>
  );
};

const Panel: React.FC<any> = ({
  position,
  onPress,
  weatherData,
  address,
}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const currentData: IWeatherData = weatherData?.current as IWeatherData;
  const weatherPerDay = weatherData?.daily ?? [];
  const alerts = weatherData?.alerts ?? [];
  return (
    // <TouchableOpacity onPress={onPress}>
    //   <View style={styles.positonBox}>
    //     <Text style={styles.positonBoxTitle}>Sua Localização</Text>
    //     <View style={styles.positonBoxLatLon}>
    //       <Text style={{fontSize: 18}}>Lat.</Text>
    //       <Text style={{fontSize: 18}}>{position?.latitude}</Text>
    //     </View>
    //     <View style={styles.positonBoxLatLon}>
    //       <Text style={{fontSize: 18}}>Lon.</Text>
    //       <Text style={{fontSize: 18}}>{position?.longitude}</Text>
    //     </View>
    //   </View>
    //   {/* <TouchableOpacity style={styles.locationButton} onPress={() => {}}>
    //     <Icon name="search" color={'#fff'} size={30} />
    //   </TouchableOpacity>
    //   <View style={styles.logo}>
    //     <Text style={styles.logoText}>Samurai</Text>
    //     <Text style={[styles.logoText, {color: '#e74c3c'}]}>Map</Text>
    //   </View> */}
    // </TouchableOpacity>
    <View
      style={{
        padding: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center'}}>
          <WeatherCard weatherData={currentData} />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text>
            {address?.neighborhood}/{address?.city} - {address?.state}
          </Text>
          <Text>{address?.zip}</Text>
        </View>
      </View>
      <FlatList
        data={weatherPerDay}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />
      {alerts.map(renderAlert)}
    </View>
  );
};
export default Panel;
