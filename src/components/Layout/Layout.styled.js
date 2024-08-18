import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors } = theme;

export const PageHeader = styled.header`
  background-color: ${colors.mainAccentColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  margin-bottom: 40px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;
