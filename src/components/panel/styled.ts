import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

export const FullAddress = styled.Text`
  text-align: center;
  margin-bottom: 16px;
`;

export const SectionLabel = styled.Text`
  font-weight: 800;
  font-size: 18px;
  margin-top: 8px;
  color: #0356fc;
`;

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
export const Shimmer = styled(ShimmerPlaceholder)`
  border-radius: 4px;
  padding: 6px;
  margin-bottom: 4px;
  background-color: #fff9;
  ${props => (props.visible ? '' : 'width:100%;')}
  ${props => (props.height ? `height:${props.height}px;` : '')}
`;

export const styles = StyleSheet.create({
  scrollContainer: {
    padding: 12,
  },
  contentContainerStyle: {
    paddingBottom: 64,
  },
});