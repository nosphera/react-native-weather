import React from 'react';
import {IAddress} from '../../../business/interfaces/iAddress';
import {IBaseProps} from '../../../business/interfaces/iBaseProps';
import WeatherCard from '../../forecast/weatherCard';
import AddressDetails from '../addressDetails';
import {Container} from './styled';

interface IProps extends IBaseProps {
  address: IAddress;
  weatherData: any;
}

const PanelHeader = ({address, weatherData, loading}: IProps) => {
  return (
    <Container>
      <WeatherCard weatherData={weatherData} loading={loading} />
      <AddressDetails address={address} loading={loading} />
    </Container>
  );
};

export default PanelHeader;
