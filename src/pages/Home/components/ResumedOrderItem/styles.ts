import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .main-infos {
    display: flex;
    flex-direction: column;

    .data-source {
      color: ${({ theme }) => theme.colors.redorange[500]};
      font-weight: 700;

      margin-bottom: 0.6rem;
    }

    .transaction-title {
      color: ${({ theme }) => theme.anatomy.colors.homePage.mainTexts};
      font-weight: 500;
    }

    .transaction-content {
      color: ${({ theme }) => theme.anatomy.colors.homePage.darkTexts};
      font-weight: 600;

      margin-bottom: 0.6rem;
    }

    .date {
      color: ${({ theme }) => theme.anatomy.colors.homePage.lightTexts};

      display: flex;
      align-items: center;
      gap: 0.2rem;

      line-height: 0;
      svg {
        line-height: 0;
      }
    }
  }
`;
