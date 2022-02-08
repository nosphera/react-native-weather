import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-end;
  max-width: 280px;
  padding:4px;
`;

export const Text = styled.Text`
  color: #434343;
  flex-shrink: 1;
  font-weight: 700;
`;

export const NeighborgoodText = styled(Text)`
  font-size: 24px;
`;

export const ZipText = styled(Text)`
  font-size: 18px;
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
export const Shimmer = styled(ShimmerPlaceholder)`
  border-radius: 18px;
  margin-bottom: ${({visible}) => (visible ? '0' : '4')}px;
`;
