import styled from 'styled-components/native';

export const Container = styled.View`
  margin-right: 1px;
  margin-bottom: 8px;
  padding-top: 48px;
  align-content: center;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  height: 32px;
  width: 32px;
  position: absolute;
  bottom: 35px;
  left: 2px;
  z-index: 2;
  resize-mode: contain;
`;

export const Bar = styled.View`
  width: 100%;
  background-color: #03c2fc;
  justify-content: flex-end;
  padding: 1px;
`;

export const Text = styled.Text`
  text-align: center;
  margin: 1px;
`;
