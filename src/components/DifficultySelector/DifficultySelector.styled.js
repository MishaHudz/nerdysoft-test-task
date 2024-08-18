import styled from "styled-components";
import { theme } from "../../stylesheet/theme";
const { colors, radii } = theme;

export const DifficultyLabel = styled.label`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  gap: 5px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const DifficultyInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: ${radii.round};
  border: 2px solid ${colors.radioAround};
  outline: none;
  cursor: pointer;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  background-color: transparent;

  &:checked {
    background-color: ${colors.radioAround};
  }

  &:checked::after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: ${radii.round};
    background-color: ${colors.radioInside};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;
