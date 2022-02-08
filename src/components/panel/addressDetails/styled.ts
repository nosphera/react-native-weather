import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-end;
  max-width: 60%;
`;

export const Text = styled.Text`
  flex-shrink: 1;
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 16;
`;
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
export const Shimmer = styled(ShimmerPlaceholder)`
  border-radius: 18px;
  margin-bottom: 4px;
`;
