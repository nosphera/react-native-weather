import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled.Image`
  height: 48;
  width: 48;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
`;

export const TemperatureDecorator = styled.Text`
  margin-top: 12px;
`;

export const TemperatureLabel = styled.Text`
  font-size: 48px;
  font-weight: bold;
`;
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
export const Shimmer = styled(ShimmerPlaceholder)`
  border-radius: 18px;
  ${props => (props.visible ? '' : 'width: 100px')}
  min-height: 76px;
`;
