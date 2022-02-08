import moment from 'moment';
import React from 'react';
import {weekDay} from '../../../business/enum/weekDays';
import {IAddress} from '../../../business/interfaces/iAddress';
import {IBaseProps} from '../../../business/interfaces/iBaseProps';
import {Container, Shimmer, Text} from './styled';

interface IProps extends IBaseProps {
  address?: IAddress;
}
const AddressDetails = ({address, loading}: IProps) => {
  return (
    <Container>
      <Shimmer visible={!loading}>
        <Text>{address?.neighborhood}</Text>
      </Shimmer>
      <Shimmer visible={!loading}>
        <Text>
          {address?.city} - {address?.state}
        </Text>
      </Shimmer>
      <Shimmer visible={!loading}>
        <Text>{address?.zip}</Text>
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
