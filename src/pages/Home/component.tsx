import React from 'react';
import {Image, SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import styles, { BackgroundImage } from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Panel from '../../components/panel';
import {IHomeComponent} from '../../business/interfaces/IHomeComponent';
import SeachBar from '../../components/search/searchBar';
import RefreshButton from '../../components/refreshButton';

const HomeComponent: React.FC<any> = ({
  position,
  setPosition,
  weatherData,
  address,
  refresh,
  handleSearch,
  cities,
  loading,
}: IHomeComponent) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const _setPosition = (pos: any) => {
    setPosition({...position, ...pos});
  };
  const img = require('../../images/clima1.png');
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <BackgroundImage source={img} resizeMethod="resize" />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SeachBar
        handleSearch={handleSearch}
        onSelect={_setPosition}
        cities={cities}
      />
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <RefreshButton onPress={refresh} loading={loading} />
      </View>
      <Panel {...{position, weatherData, address, loading}} />
    </SafeAreaView>
  );
};

export default HomeComponent;
