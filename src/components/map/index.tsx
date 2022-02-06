import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';

const Map: React.FC<any> = ({position, setPosition}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <MapView
      style={styles.map}
      region={position}
      provider={'google'}
      showsUserLocation={false} //destacando a localização do usuário no mapa
      showsMyLocationButton={true}
      toolbarEnabled={true}
      onPress={e =>
        setPosition({
          ...position,
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        })
      }
    >
      <Marker
        coordinate={position}
        title={'Marcador'}
        description={'Testando o marcador no mapa'}
      />
    </MapView>
  );
};

export default Map;
