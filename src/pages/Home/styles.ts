import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.anatomy.colors.homePage.contentBackground};
  border-radius: 8px;

  padding: 1.6rem;
`;

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.anatomy.colors.homePage.contentHeaderBackground};
  border-radius: 8px;

  padding: 1.6rem 2.4rem;

  display: flex;
  gap: 1.6rem;

  .search-and-info {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .search-input {
      max-width: 60%;
      min-width: 20rem;
    }

    .max-results-input {
      width: 14rem;
    }

    .tags {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      flex-wrap: wrap;
    }
  }

  .filters {
    display: flex;
    gap: 3.2rem;

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      width: 20rem;
    }
  }
`;

export const ResumedOrderItensContainer = styled.div`
  padding: 1.2rem 0;
`;

export const ResumedOrderItensList = styled.ul`
  list-style: none;
`;

export const FooterContainer = styled.footer`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0.8rem 0;

  span {
    font-weight: 500;

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.anatomy.colors.homePage.blueTexts};
    }
  }

  .pagination-info {
    display: flex;
    align-items: center;
    gap: 6.4rem;
  }
`;
