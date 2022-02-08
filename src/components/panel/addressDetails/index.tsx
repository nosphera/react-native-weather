import moment from 'moment';
import React from 'react';
import {weekDay} from '../../../business/enum/weekDays';
import {IAddress} from '../../../business/interfaces/iAddress';
import {IBaseProps} from '../../../business/interfaces/iBaseProps';
import {Container, NeighborgoodText, Shimmer, Text, ZipText} from './styled';

interface IProps extends IBaseProps {
  address?: IAddress;
}
const AddressDetails = ({address, loading}: IProps) => {
  return (
    <Container>
      <Shimmer visible={!loading}>
        <NeighborgoodText>{address?.neighborhood}</NeighborgoodText>
      </Shimmer>
      <Shimmer visible={!loading}>
        <Text>
          {address?.city} - {address?.state}
        </Text>
      </Shimmer>
      <Shimmer visible={!loading}>
        <ZipText >{address?.zip}</ZipText>
      </Shimmer>
      <Shimmer visible={!loading}>
        <Text>
          {address?.forecastDate
            ? `${weekDay[address?.forecastDate.getDay()]}, `
            : ''}
          {address?.forecastDate
            ? moment(address?.forecastDate).format('hh:mm')
            : ''}
        </Text>
      </Shimmer>
    </Container>
  );
};

export default AddressDetails;
