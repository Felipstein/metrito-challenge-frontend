import styled from 'styled-components';

export const LayoutPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;

  .content {
    flex: 1;

    margin: 4rem auto;

    max-width: 144rem;
    width: 84vw;

    height: 80%;
  }
`;
