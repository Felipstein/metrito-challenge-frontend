import React from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

import { MenuProps } from './types';
import * as S from './styles';

export const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        {children}
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content sideOffset={4}>
          <Dropdown.Item>
            Teste 1
          </Dropdown.Item>
          <Dropdown.Item>
            Teste 2
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
