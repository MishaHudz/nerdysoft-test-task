import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors, borders, transitions } = theme;

export const HomePageButton = styled.button`
  padding: 10px 30px;
  border: ${borders.medium + "" + colors.borderMainAccentColor};
  border-radius: 30px;
  transition: ${transitions.regular};

  &:hover,
  &:focus {
    scale: 1.05;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;
