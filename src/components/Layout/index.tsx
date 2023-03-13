import React from 'react';

import { LayoutProps } from './types';
import * as S from './styles';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.LayoutPage>
      <header>Header</header>
      <div className="content">
        {children}
      </div>
      <footer>Footer</footer>
    </S.LayoutPage>
  );
};
