import styled from 'styled-components';

export const Container = styled.main`
  width: 375px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 12px;
  padding: 24px 24px 16px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  .titleContainer {
    display: flex;
    gap: 16px;

    div {
      h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.gray[100]};
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.colors.gray[200]};
      }
    }
  }

  .settings {
    display: flex;
    flex-direction: column;
    gap: 16px;

    hr {
      border: 0.5px solid ${({ theme }) => theme.colors.gray[400]};
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 12px;

      h2 {
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: ${({ theme }) => theme.colors.gray[300]};
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .sectionBody {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .button,
        .exitButton {
          display: flex;
          align-items: center;
          justify-content: space-between;

          > div {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }

        .exitButton {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;
