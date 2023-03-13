import styled from 'styled-components';

export const HeaderContainer = styled.header`
  .top-header {
    display: flex;
    justify-content: space-between;

    padding: 1.2rem 2.8rem;

    background-color: ${({ theme }) => theme.anatomy.colors.header.topHeader};
    color: ${({ theme }) => theme.anatomy.colors.header.title};

    h1 {
      font-size: 3.2rem;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }

  padding: 0.8rem;
  height: 5.2rem;

  background-color: ${({ theme }) => theme.anatomy.colors.header.navBar};
`;
