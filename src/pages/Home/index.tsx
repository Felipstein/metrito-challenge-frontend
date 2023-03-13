import React from 'react';
import { Input } from '../../components/Input';

import * as S from './styles';

export const Home: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <div className="search-and-info">
          <Input
            name='search'
            type='text'
            placeholder='Buscar por nome, preço, produto...'
          />

          <Input
            name='max-results'
            type='number'
            label='Máx. de produtos p/ pág.'
            small
            min={0}
          />
        </div>
      </S.HeaderContainer>
    </S.Container>
  );
};
