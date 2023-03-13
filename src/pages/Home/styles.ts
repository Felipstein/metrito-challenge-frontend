import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.anatomy.colors.homePage.contentBackground};
  border-radius: 8px;

  padding: 1.6rem;

  .content-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    width: 100%;
    min-height: 25rem;

    .loading-feedback {
      font-weight: 500;
      color: ${({ theme }) => theme.anatomy.colors.homePage.mainTexts};
    }
  }
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

      @media screen and (max-width: 728px) {
        max-width: 100%;
      }
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

  @media screen and (max-width: 728px) {
    flex-direction: column;
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

export const FailedToFetch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.redorange[500]};

  min-height: 25rem;
`;
