import SearchBar from 'react-native-dynamic-search-bar';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 16px;
`;

export const StyledSearchBar = styled(SearchBar)`
  z-index: 3;
`;

export const ItemsContainer = styled.View`
  background-color: #bbb0;
  position: absolute;
  left: 18px;
  right: 18px;
  top: 8px;
  z-index: 1;
  padding-top: 34px;
  border-radius: 16px;
`;
