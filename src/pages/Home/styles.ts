import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const BackgroundImage = styled.Image`
  position: absolute;
  top:40px;
  left:0px;
  opacity:0.25;
  height:110%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 8,
    backgroundColor: '#FFF',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
export default styles as any;
