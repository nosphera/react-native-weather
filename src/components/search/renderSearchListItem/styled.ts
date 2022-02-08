import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-bottom: 2px;
`;

export const Icon = styled.Image`
  height: 48px;
  width: 48px;
  margin-right: 8px;
  resize-mode: contain;
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 16;
`;
