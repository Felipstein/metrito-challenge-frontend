import React from 'react';

import { LayoutProps } from './types';
import * as S from './styles';
import { Header } from '../Header';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.LayoutPage>
      <Header />
      <div className="content">
        {children}
      </div>
      <footer>Footer</footer>
    </S.LayoutPage>
  );
};
