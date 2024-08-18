import styled from "styled-components";
import { theme } from "../../stylesheet/theme";
const { colors, borders, transitions } = theme;

export const QuestionBtn = styled.button`
  width: 100%;
  border: ${borders.medium + "" + colors.borderGreenAccentColor};
  background-color: ${colors.greenAccentColor};
  color: ${colors.white};
  border-radius: 50px;
  text-align: center;
  transition: all ${transitions.regular};
  padding: 15px 20px;

  &:hover,
  &:focus {
    scale: 1.1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const QuestionItem = styled.li`
  width: 90%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1440px) {
    width: 34%;
  }
`;
