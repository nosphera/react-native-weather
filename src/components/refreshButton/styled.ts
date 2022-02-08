import styled from 'styled-components/native';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff0;
  margin-bottom: 2px;
`;

export const Icon = styled(IconMaterial)`
  margin-right: 12px;
  margin-top: 12px;
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
export const Shimmer = styled(ShimmerPlaceholder)`
  border-radius: 18px;
  margin-bottom: 4px;
`;
