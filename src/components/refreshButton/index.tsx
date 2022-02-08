import React from 'react';
import {ActivityIndicator} from 'react-native';
import {IBaseProps} from '../../business/interfaces/iBaseProps';
import {Icon, Touchable} from './styled';

interface IProps extends IBaseProps {
  onPress: any;
}
const RefreshButton = ({onPress, loading}: IProps) => {
  if (loading) {
    return (
      <Touchable onPress={()=>{}}>
        <ActivityIndicator size={42} marginRight={12} marginTop={12} />
      </Touchable>
    );
  }
  return (
    <Touchable onPress={onPress}>
      <Icon name="refresh" size={48} color="#900" />
    </Touchable>
  );
};

export default RefreshButton;
