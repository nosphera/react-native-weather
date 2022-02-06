import React, { useState } from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SwipeablePanel} from 'rn-swipeable-panel';
import Panel from '../../components/panel';
import {IHomeComponent} from '../../business/interfaces/IHomeComponent';
import Map from '../../components/map';

const HomeComponent: React.FC<any> = ({position, setPosition, weatherData,address}: IHomeComponent) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [openPanel, setOpenPanel] = useState(true)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Map {...{position, setPosition}} />      
      <Panel {...{position,weatherData,address}} /> 
    </SafeAreaView>
  );
};

export default HomeComponent;
