import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors, transitions, radii, fontSizes } = theme;

export const PlayButton = styled.button`
  font-size: ${fontSizes.m};

  border: 1px solid ${colors.borderGreenAccentColor};
  background-color: ${colors.greenAccentColor};
  color: ${colors.white};
  padding: 10px 30px;
  border-radius: ${radii.l};
  transition: all ${transitions.regular};

  &:hover,
  &:focus {
    scale: 1.2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:disabled:hover,
  &:disabled:focus {
    scale: 1;
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;
