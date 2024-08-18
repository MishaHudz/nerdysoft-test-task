import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors } = theme;

export const PageHeaderLogo = styled.img`
  width: 70px;
  @media (min-width: 768px) {
    width: 120px;
  }

  @media (min-width: 1440px) {
  }
`;

export const PageHeader = styled.header`
  background-color: ${colors.mainAccentColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  margin-bottom: 40px;
`;

export const PageHeaderContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1440px) {
  }
`;
