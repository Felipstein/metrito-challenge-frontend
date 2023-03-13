import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.anatomy.colors.homePage.contentBackground};
  border-radius: 8px;

  padding: 1.6rem;
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.mainTexts};

  min-height: 60rem;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.redorange[500]};

  min-height: 60rem;
`;

export const ContentContainer = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;

  header {
    display: flex;
    justify-content: space-between;

    .product-name {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      span {
        color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.lightTexts}
      }

      h1 {
        color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.mainTexts};
        font-weight: 700;
      }
    }
  }
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.panelBackground};

  padding: 1.6rem;
  border-radius: 8px;

  .line-infos {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.6rem;

    .transaction-info {
      width: 30rem;

      .main-infos {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        .price-info-transaction {
          font-weight: 700;
          color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.mainTexts}
        }
      }
    }

    .order-block-info {
      width: 30rem;
      background-color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.blockInfoBackground};
      padding: 0.8rem;

      border-radius: 8px;

      display: flex;
      flex-direction: column;
      gap: 1.8rem;

      .datas {
        display: flex;
        flex-wrap: wrap;
        gap: 3.4rem;

        .data-info {
          display: flex;
          flex-direction: column;

          .order-info-data-title {
            color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.ligherTexts};
            font-weight: 500;
          }

          .order-info-data-value {
            color: ${({ theme }) => theme.anatomy.colors.orderInfoPage.mainTexts};
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export const NoDocumentInfo = styled.span`
  color: ${({ theme }) => theme.colors.redorange[500]}
`;

export const NoUserInfo = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.redorange[500]}
`;
