import React from 'react';

import { LayoutProps } from './types';
import * as S from './styles';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.LayoutPage>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </S.LayoutPage>
  );
};
