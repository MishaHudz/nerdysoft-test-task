import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors, borders, transitions } = theme;

export const HomePageButton = styled.button`
  padding: 10px 30px;
  border: ${borders.medium + "" + colors.borderMainAccentColor};
  border-radius: 30px;
  transition: ${transitions.regular};
  font-size: 12px;

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
