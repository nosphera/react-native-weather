import React from 'react';
import {ICity} from '../../../business/interfaces/iCity';
import RenderCitySearchItem from '../renderSearchListItem';
import {Container, ItemsContainer, StyledSearchBar} from './styled';

const SeachBar = ({handleSearch, onSelect, cities}: any) => {
  return (
    <Container>
      <StyledSearchBar
        placeholder="Pesquisar Cidades"
        onChangeText={(text: string) => {
          handleSearch(text);
        }}
      />
      {cities && (
        <ItemsContainer>
          {cities.map((c: ICity) => (
            <RenderCitySearchItem onSelect={onSelect} {...c} />
          ))}
        </ItemsContainer>
      )}
    </Container>
  );
};

export default SeachBar;
