import React from 'react';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';

const Map: React.FC<any> = ({position, setPosition}: any) => {
  return (
    <MapView
      style={styles.map}
      region={position}
      provider={'google'}
      showsUserLocation={false} //destacando a localização do usuário no mapa
      showsMyLocationButton={true}
      toolbarEnabled={true}
      onPress={e => {}}>
      <Marker
        coordinate={position}
        title={'Marcador'}
        description={'Testando o marcador no mapa'}
      />
    </MapView>
  );
};

export default Map;
